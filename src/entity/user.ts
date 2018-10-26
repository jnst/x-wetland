import {autoFields, entity, field} from 'wetland';

@entity()
@autoFields()
export class User {
  constructor() {}

  @field({type: 'string'})
  name: string;

  @field({type: 'bigint'})
  seed: number;
}
