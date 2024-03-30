import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/renderMiddleware.js';
import { onLogout } from './utils.js';
import { createView } from './views/createView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import {catalogView} from './views/catalogView.js';
import {searchView} from './views/searchVIew.js';

page(addRender);

page('/', homeView);
page('/catalog', catalogView);
page('/create', createView);
page('/login', loginView);
page('/register', registerView);
page('/logout', onLogout);
page('/search', searchView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page.start();
