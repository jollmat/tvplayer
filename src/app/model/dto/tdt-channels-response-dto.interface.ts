import { TdtChannelsCountryDto } from "./tdt-channels-country-dto.interface";

export interface TdtChannelsDto {
    license: { source: string, url: string },
    epg: { xml: string, "xml.gz": string, json: string },
    countries: TdtChannelsCountryDto[],
    updated?: number | null
}