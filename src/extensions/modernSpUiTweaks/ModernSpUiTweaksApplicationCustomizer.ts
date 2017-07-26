import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import * as $ from 'jquery';

import * as strings from 'modernSpUiTweaksStrings';

const LOG_SOURCE: string = 'ModernSpUiTweaksApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IModernSpUiTweaksApplicationCustomizerProperties {
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ModernSpUiTweaksApplicationCustomizer
  extends BaseApplicationCustomizer<IModernSpUiTweaksApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    return Promise.resolve<void>();
  }

  @override
  public onRender(): void {

    this.fixAllSiteContentLinks();

  }

  // If current page is Site Contents, make the links not open in a new window. It does this by stripping out the React attributes
  // on each link.
  private fixAllSiteContentLinks(): void {

    if(window.location.href.match(/viewlsts.aspx/i)) {
      $("a.ms-Link").removeAttr("data-reactid");
    }
  }
}
