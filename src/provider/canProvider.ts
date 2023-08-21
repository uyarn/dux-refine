import { AccessControlProvider, CanParams, CanReturnType } from '@refinedev/core'

export const canProvider = (app: string): AccessControlProvider => {
  return {
    can: async ({ resource, action }: CanParams): Promise<CanReturnType> => {
      const auth = localStorage.getItem(app + ':auth')
      if (!auth) {
        return { can: false }
      }
      if (resource === undefined) {
        return { can: true }
      }

      const { permission } = JSON.parse(auth)

      if (!permission) {
        return { can: false }
      }

      if (typeof permission !== 'object') {
        return { can: true }
      }

      if (permission[resource + '.' + action] !== undefined) {
        return { can: !!permission[resource + '.' + action] }
      }

      if (permission[resource] !== undefined) {
        return { can: !!permission[resource] }
      }

      return { can: true }
    },
    options: {
      buttons: {
        enableAccessControl: true,
        hideIfUnauthorized: false,
      },
    },
  }
}
