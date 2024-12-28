import * as vscode from "vscode";
import { Commands } from "./constants";
import Cli from "./Boilerplater/Cli";
import Webview from "./Boilerplater/Webview";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.BOILERPLATER_WEBVIEW, () => {
      Webview.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.BOILERPLATER_CLI, async () => {
      Cli.boilerplate();
    })
  );
}

export function deactivate() {}
