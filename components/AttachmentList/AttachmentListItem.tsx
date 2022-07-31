import { Attachment } from './AttachmentList';
import ClipIcon from '../ClipIcon';

export interface AttachmentListItemProps {
  attachment: Attachment;
}

export const AttachmentListItem = ({ attachment }: AttachmentListItemProps) => {
  return (
    // border-t border-gray-200
    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
      <div className="w-0 flex-1 flex items-center">
        <ClipIcon />
        <span className="ml-2 flex-1 w-0 truncate">
          {attachment.name}
        </span>
      </div>
      <div className="ml-4 flex-shrink-0">
        <a href={attachment.url}
          download={attachment.name}
          className="font-medium text-emerald-600 hover:text-emerald-500 transition duration-150 ease-in-out">
          Download
        </a>
      </div>
    </li>
  );
};
