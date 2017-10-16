import { Injectable } from '@angular/core';
import { config } from "../../../../environments/config";
import Promise from 'bluebird';
import { Subject, BehaviorSubject } from "rxjs";

declare var io: any;

export const PROTOCOL = 'http';
export const SOCKET_SERVER = config.socketIoServer;

@Injectable()
export class SocketApiService {

  private _transports = [ 'websocket' ];
  private _socket: any;
  private _isJoined = false;

  public onSlideChanged = new Subject();
  public onDraw = new Subject();

  constructor(
  ) {
  }

  joinServer() {
    if (this._isJoined && this._socket) {
      return Promise.resolve(this._socket);
    }
    let publicIp = SOCKET_SERVER;
    let socket = this._socket = io(publicIp, {
      transports: this._transports
    });
    socket.on('disconnect', () => {
      console.log('Disconnected from the server:', publicIp, socket.id);
    });
    socket.on('app.error', data => {
      console.log('app.error', data);
    });
    return new Promise((resolve, reject) => {
      socket.on('connect', () => {
        console.log('Connected to the server:', publicIp, socket.id);
        this._isJoined = true;
        this._subscribeSlideChanges();
        this._subscribeDrawing();
        resolve(socket);
      });
    });
  }

  joinRoom(params) {
    let { id } = params;
    this._socket.emit('room.join', { id });
    return new Promise((resolve, reject) => {
      this._socket.once('room.joined', data => resolve(data));
    });
  }

  onCloseQrLayer() {
    let subject = new Subject();
    this._socket.once('room.closeQrLayer', data => {
      subject.next( true );
    });
    return subject;
  }

  _subscribeSlideChanges() {
    this._socket.on('room.setSlideNumber', data => {
      this.onSlideChanged.next( data.slideNumber );
    });
  }

  _subscribeDrawing() {
    this._socket.on('room.draw', data => {
      this.onDraw.next( data );
    });
  }
}