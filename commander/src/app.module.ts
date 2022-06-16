import { Module } from "@nestjs/common";
import { HelloCommander } from "./scripts/helloCommander.command";

@Module({
  imports: [],
  providers: [HelloCommander],
})
export class AppModule {}
