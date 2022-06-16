import { Command, CommandRunner } from "nest-commander";

@Command({
  name: "helloCommander",
  options: { isDefault: false },
})
export class HelloCommander implements CommandRunner {
  tronData;

  async run(): Promise<void> {
    console.log("Hello commander");
  }
}
