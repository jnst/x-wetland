import {autoFields, entity, field} from 'wetland';

@entity()
@autoFields()
export class User {
  @field({type: 'string'})
  name: string;

  @field({type: 'bigInteger'})
  seed: number;
}
