export interface Repo {
    name?: string ;
    html_url?: string ;
    description?: string ;
    pushed_at?: Date ;
    open_issues_count?: Number ;
    owner?: {
        avatar_url?: string ;
    } ;
}
