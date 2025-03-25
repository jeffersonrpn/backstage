/*
 * Copyright 2024 The Backstage Authors
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

// We can add custom icons to the list outside of Remix

import type { IconMap } from './types';
import {
  RiHeartLine,
  RiArrowDownLine,
  RiCloudLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowUpLine,
  RiDeleteBin6Line,
  RiAddLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowDownCircleLine,
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
  RiArrowUpCircleLine,
  RiCheckLine,
  RiMoonLine,
  RiSunLine,
  RiExternalLinkLine,
  RiArrowLeftDownLine,
  RiArrowRightDownLine,
  RiArrowLeftUpLine,
  RiArrowRightUpLine,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiSparklingLine,
  RiFlowerLine,
  RiCodeLine,
  RiTerminalLine,
  RiBracketsLine,
  RiBracesLine,
  RiBugLine,
  RiGitRepositoryLine,
  RiCheckDoubleLine,
  RiFilterLine,
  RiEyeLine,
  RiEyeOffLine,
  RiDownloadLine,
  RiUploadLine,
  RiStarLine,
  RiSidebarFoldLine,
  RiSidebarUnfoldLine,
  RiZoomInLine,
  RiZoomOutLine,
  RiAlertLine,
  RiAccountCircleLine,
  RiGroupLine,
  RiUserLine,
  RiGithubLine,
  RiDiscordLine,
  RiYoutubeLine,
} from '@remixicon/react';

/** @public */
export const icons: IconMap = {
  'account-circle': RiAccountCircleLine,
  alert: RiAlertLine,
  'arrow-down': RiArrowDownLine,
  'arrow-down-circle': RiArrowDownCircleLine,
  'caret-down': RiArrowDropDownLine,
  'caret-left': RiArrowDropLeftLine,
  'caret-right': RiArrowDropRightLine,
  'caret-up': RiArrowDropUpLine,
  'arrow-left': RiArrowLeftLine,
  'arrow-left-circle': RiArrowLeftCircleLine,
  'arrow-left-down': RiArrowLeftDownLine,
  'arrow-left-up': RiArrowLeftUpLine,
  'arrow-right': RiArrowRightLine,
  'arrow-right-circle': RiArrowRightCircleLine,
  'arrow-right-down': RiArrowRightDownLine,
  'arrow-right-up': RiArrowRightUpLine,
  'arrow-up': RiArrowUpLine,
  'arrow-up-circle': RiArrowUpCircleLine,
  braces: RiBracesLine,
  brackets: RiBracketsLine,
  bug: RiBugLine,
  check: RiCheckLine,
  'check-double': RiCheckDoubleLine,
  'chevron-down': RiArrowDownSLine,
  'chevron-left': RiArrowLeftSLine,
  'chevron-right': RiArrowRightSLine,
  'chevron-up': RiArrowUpSLine,
  cloud: RiCloudLine,
  code: RiCodeLine,
  discord: RiDiscordLine,
  download: RiDownloadLine,
  'external-link': RiExternalLinkLine,
  eye: RiEyeLine,
  'eye-off': RiEyeOffLine,
  filter: RiFilterLine,
  flower: RiFlowerLine,
  github: RiGithubLine,
  'git-repository': RiGitRepositoryLine,
  group: RiGroupLine,
  heart: RiHeartLine,
  moon: RiMoonLine,
  plus: RiAddLine,
  'sidebar-fold': RiSidebarFoldLine,
  'sidebar-unfold': RiSidebarUnfoldLine,
  sparkling: RiSparklingLine,
  star: RiStarLine,
  sun: RiSunLine,
  terminal: RiTerminalLine,
  trash: RiDeleteBin6Line,
  upload: RiUploadLine,
  user: RiUserLine,
  youtube: RiYoutubeLine,
  'zoom-in': RiZoomInLine,
  'zoom-out': RiZoomOutLine,
} as const;
