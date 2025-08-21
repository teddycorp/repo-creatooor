import { AccessPermission } from './github';

export type Config = {
  teamPermissions: Record<string, AccessPermission>;
};
