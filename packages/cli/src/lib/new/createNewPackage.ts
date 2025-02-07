/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { collectPortableTemplateParams } from './preparation/collectPortableTemplateParams';
import { loadPortableTemplateConfig } from './preparation/loadPortableTemplateConfig';
import { executePortableTemplate } from './execution/executePortableTemplate';
import { selectTemplateInteractively } from './preparation/selectTemplateInteractively';
import { loadPortableTemplate } from './preparation/loadPortableTemplate';

export type CreateNewPackageOptions = {
  preselectedTemplateId?: string;
  globals: {
    private?: boolean;
    npmRegistry?: string;
    scope?: string;
    license?: string;
    baseVersion?: string;
  };
  prefilledParams: Record<string, string>;
};

export async function createNewPackage(options: CreateNewPackageOptions) {
  const config = await loadPortableTemplateConfig({
    globalOverrides: options.globals,
  });

  const selectedTemplate = await selectTemplateInteractively(
    config,
    options.preselectedTemplateId,
  );
  const template = await loadPortableTemplate(selectedTemplate);

  const params = await collectPortableTemplateParams({
    config,
    template,
    prefilledParams: options.prefilledParams,
  });

  await executePortableTemplate({
    config,
    template,
    params,
  });
}
