import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

// enums
export enum PermissionProvider {
    U = 'U',
    R = 'R',
    T = 'T'
}

export enum Permissions {
    ROLES = 'AbpIdentity.Roles',
    USERS = 'AbpIdentity.Users',
    TENANTS = 'AbpTenantManagement.Tenants',
    MANAGAE_HOST_FEATURES = 'FeatureManagement.ManageHostFeatures',
    SETTINGS = 'SettingManagement.Emailing'
}

export enum PermissionsGrant {
    ROLE_MANAGEMENT = 'Role management',
    TENANT_MANAGEMENT = 'Tenant management',
    FEATURE_MANAHEMENT = 'Feature management',
    SETTING_MANAGEMENT = 'Setting management'
}

export enum USER_ROLE {
    ADMIN = 'admin'
}
