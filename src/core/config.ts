export interface tabBarItem {
  label: string
  icon: string
  route: string
}

export interface userMenuItem {
  label: string
  icon: string
  route: string
}

export interface apiPath {
  login: string
  check?: string
  register?: string
  forgotPassword?: string
  updatePassword?: string
  updateProfile?: string
  upload?: string
}

export interface moduleApp {
  register?: boolean
  forgotPassword?: boolean
  updatePassword?: boolean
}

export interface Config {
  projectId: string
  apiUrl: string
  apiPath: apiPath
  defaultApp: string
  resourcesPrefix: boolean
  moduleApp?: Record<string, moduleApp>
}
