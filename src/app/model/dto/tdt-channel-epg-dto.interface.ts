export interface TdtChannelEpgDto {
    name: string,
    events: {
        c: string,
        d: string,
        g: string,
        hf: number,
        hi: number,
        t: string
    }[]
}