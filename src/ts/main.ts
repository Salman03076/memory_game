console.log('set up ready!');

import { application } from './App';
import { cardstructure } from './card';
import { boxcard } from './createUI';
import {flipcardActive} from'./gameControl'


application();
new cardstructure()
new boxcard()
new flipcardActive()


