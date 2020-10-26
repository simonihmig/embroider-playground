import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AddonController extends Controller {

  @tracked
  content;

  @action
  async load() {
    const lazyModule = await import('embroider-playground/lazy');
    this.content = lazyModule.default;
  }
}
