type TNEntity = {
    id: string
} & {
    [key in string]: unknown
};

export type TDataModule<TNData extends TNEntity> = {entities: {[key: string]: TNData}, ids: string[]};

export const createInitState = <TNData extends TNEntity> (normalizedData: TNData[]) => ({
    entities: normalizedData.reduce((acc : {[key: string]: TNData}, entity : TNData) => {
        acc[entity.id] = entity;

        return acc;
    }, {}),
    ids: normalizedData.map(({id}) => id)
}) as TDataModule<TNData>;