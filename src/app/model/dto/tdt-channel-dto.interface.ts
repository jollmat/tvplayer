export interface TdtChannelDto {
    name: string,
    web: string,
    logo: string,
    epg_id: string,
    options: {
        format: string,
        url: string,
        geo2: string,
        res: string,
        lang: string
    }[]
}