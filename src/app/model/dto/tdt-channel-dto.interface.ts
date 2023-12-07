export interface TdtChannelDto {
    name: string,
    web?: string | null,
    logo: string,
    logoBgStyle?: 'dark' | 'light',
    epg_id?: string | null,
    country?: string,
    options: {
        format: string,
        url: string,
        geo2?: string | null,
        res?: string | null,
        lang?: string | null
    }[],
    extra_info?: string[] | null,
    referer?: string | null
}