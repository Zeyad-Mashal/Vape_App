
type Messages = typeof import("./src/messages/en.json");
type ArMessages = typeof import("./src/messages/ar.json");

declare interface IntlMessages extends Messages, ArMessages { } 