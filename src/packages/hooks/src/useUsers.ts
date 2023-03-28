import { useQuery } from '@tanstack/react-query';
import { UserService } from '@abpreact/proxy';
import { QueryNames } from './QueryConstants';

export const useUsers = (
    pageIndex: number,
    pageSize: number,
    filter?: string | undefined
) => {
    return useQuery(
        [QueryNames.GetUsers, pageIndex, pageSize, filter],
        async () => {
            let skip = 0;
            if (pageIndex > 0) {
                skip = (pageIndex - 1) * pageSize;
            }

            const data = await UserService.userGetList(
                filter,
                '',
                skip,
                pageSize
            );
            return data;
        },
        {
            keepPreviousData: false,
            cacheTime: undefined
        }
    );
};
