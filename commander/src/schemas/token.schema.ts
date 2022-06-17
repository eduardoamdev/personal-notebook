import { Document } from "mongoose";

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TokenDocument = Token & Document;

@Schema()
export class Token {
  @Prop()
  token: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
