export interface UserToken {
    sub?: string;
    authorities?: Array<string>;
    iat?: number;
    exp?: number;
}
