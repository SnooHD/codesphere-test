import { WebSocketMessageProps } from "@/types/webSocket.types";
import { CODESPHERE_BACKEND, TEAM_ID } from "@/utils/env.util";

/**
 * Using websocket as an utility.
 * Hooks will create a new instance for each component the hook is used
 */

let socket: WebSocket;
export const startWebSocket = () => {
  socket = new WebSocket(`wss://${CODESPHERE_BACKEND}/${TEAM_ID}`);

  socket.onopen = () => {
    console.info("socket opened and listening");
  };

  socket.onclose = () => {
    console.info("socket connection closed");
    // Lets try to reconnect
    startWebSocket();
  };

  socket.onmessage = (event: MessageEvent) => {
    console.log(event);
  };

  socket.onerror = (event: Event) => {
    console.error("socket error");
    // Lets try to reconnect
    startWebSocket();
  };
};

export const sendWebSocketMessage = async ({
  id,
  name,
  deleted,
}: WebSocketMessageProps) => {
  if (!socket) {
    throw "Socket is not running!";
  }

  try {
    await socket.send(
      JSON.stringify({
        id,
        name,
        deleted,
        teamId: TEAM_ID,
      })
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};
