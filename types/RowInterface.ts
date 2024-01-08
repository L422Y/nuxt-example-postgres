export interface RowInterface {
    id: number
    timestamp: Date
    userstamp: string
    descr: string
    current_release: number
    full_descr: string
    alive: string
    for_release: string
    display_name: string
    project_id: string
    avg_length: number
    min_length: number
    max_length: number
    num_sequences: number
    num_organisms: number
    description: string
    url: string
    example: { upi: string, taxid: number }[]
    reference: { title: string, authors: string, journal: string, pubmed_id: string }[]
}
