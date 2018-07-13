

import { Todo } from './models';
import { YoutubeItem } from './models';
import { MongoObservable } from 'meteor-rxjs';

export const Todos = new MongoObservable.Collection<Todo>('todos');

export const YoutubeItems = new MongoObservable.Collection<YoutubeItem>('youtubeItems');

