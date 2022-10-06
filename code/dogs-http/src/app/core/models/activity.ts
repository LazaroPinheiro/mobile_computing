/**
 * Activity specification.
 */

export interface Activity {
    name: string;
    type: {
        tag: string
        name: string,
    };
    participants: number;
    price: number;
    accessibility: number;
    link: string;
}
