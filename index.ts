import type React from "react";
type ComponentType = React.ComponentType<any>;
export interface Omni {
  registerMDXComponent(name: string, component: ComponentType): void;
  getMDXComponent(name: string): ComponentType | undefined;
  getAllMDXComponents(): Map<string, ComponentType>;
}

export interface ProjectConfig {
  id: string;
  path: string;
  name?: string;
}

export interface PluginManifest {
  id: string;
  name: string;
  version: string;
  minAppVersion: string;
  author: string;
  authorUrl?: string;
  fundingUrl?: string;
  description: string;
  mdxComponents: string[];
}
export interface InstalledPlugin {
  manifest: PluginManifest;
  path: string;
}
export type BrokenPlugin = {
  manifest: PluginManifest | null;
  path: string;
  issues?: string[];
};
export abstract class IOmniPlugin {
  protected readonly omni: Omni;
  protected readonly project: ProjectConfig;
  protected readonly manifest: PluginManifest;
  constructor(omni: Omni, project: ProjectConfig, manifest: PluginManifest) {
    this.omni = omni;
    this.manifest = manifest;
    this.project = project;
  }
}
