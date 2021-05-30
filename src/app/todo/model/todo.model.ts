export interface todo  {
    id: number;
    title: string;
    taskLevel: level;
}

export type level = "Easy"| "Medium" |"Hard"
