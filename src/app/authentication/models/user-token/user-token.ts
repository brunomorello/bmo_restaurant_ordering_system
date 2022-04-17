export interface UserToken {
    jti?: string;
    sub?: string;
    authorities?: Array<string>;
    iat?: number;
    exp?: number;
}
