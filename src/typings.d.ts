/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare module 'swipejs';
declare var io: Socket;
interface Socket {
  on(event: string, callback: (data: any) => void );
  emit(event: string, data: any);
}
declare var Phaser: any;