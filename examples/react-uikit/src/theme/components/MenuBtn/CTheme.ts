import active from './active';
import line from './line';
import nonActive from './nonactive';

export interface ICTheme {
    line: typeof line;
    active: typeof active;
    nonActive: typeof nonActive;
}
export const CTheme: ICTheme = {
    line,
    active,
    nonActive,
};

export default CTheme;