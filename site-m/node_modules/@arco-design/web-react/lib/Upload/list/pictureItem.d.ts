import { UploadListProps } from '../interface';
import { UploadItem } from '../upload';
declare const PictureItem: (props: UploadListProps & {
    file: UploadItem;
}) => JSX.Element;
export default PictureItem;
