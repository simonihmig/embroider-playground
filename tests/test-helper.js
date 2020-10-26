import Application from 'embroider-playground/app';
import config from 'embroider-playground/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
