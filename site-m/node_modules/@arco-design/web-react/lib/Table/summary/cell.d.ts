import { HTMLAttributes, ReactNode } from 'react';
import { Omit } from '../../_util/type';
interface SummaryCellProps extends Omit<HTMLAttributes<HTMLTableDataCellElement>, 'children'> {
    children?: ReactNode;
    colSpan?: number;
    rowSpan?: number;
}
declare function Cell(props: SummaryCellProps): JSX.Element;
declare namespace Cell {
    var defaultProps: {
        $$ArcoTableSummaryCell: boolean;
    };
}
export default Cell;
