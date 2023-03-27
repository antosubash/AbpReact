import { useQuery } from '@tanstack/react-query';
import { UserService } from '@abpreact/proxy';
import { QueryNames } from './QueryConstants';

export const useAssignableRoles = () => {
    return useQuery([QueryNames.GetAssignableRoles], async () => {
        const data = await UserService.userGetAssignableRoles();
        return data;
    });
};
