import { CallController } from "./funcionalidade/callController";
import { ICallController } from "./funcionalidade/iCallController";
import { ICallRepository } from "./modelo/iCallRepository";
import { MemoryCallRepository } from "./modelo/memoryCallRepository";
import { ICallUI } from "./ui/iCallUI";
import { TextCallUI } from "./ui/TextCallUI";

let callRepository : ICallRepository;
callRepository = new MemoryCallRepository();

let callController : ICallController;
callController = new CallController(callRepository);

let ui : ICallUI;
ui = new TextCallUI(callController);

ui.start();