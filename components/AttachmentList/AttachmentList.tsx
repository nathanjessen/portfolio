import { AttachmentListItem } from './AttachmentListItem';

export interface Attachment {
  name: string;
  url: string;
}

export interface AttachmentListProps {
  title: string;
  attachments: Attachment[];
}

export const AttachmentList = ({ title = "Attachments", attachments }: AttachmentListProps) => {
  return (
    <div>
      <dt className="text-sm leading-5 font-medium text-gray-500">
        {title}
      </dt>
      <dd className="mt-1 text-sm leading-5 text-gray-900">
        <ul className="border border-gray-200 rounded-md">
          {attachments.map((attachment, idx) => (
            <AttachmentListItem key={idx} attachment={attachment} />
          ))}
        </ul>
      </dd>
    </div>
  );
};
