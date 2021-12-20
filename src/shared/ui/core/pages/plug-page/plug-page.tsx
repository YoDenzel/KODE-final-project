import { PlugTemplate } from '../../templates';
import { TProps } from '../../templates/plug-template/plug-template';

export const PlugPage = ({ title, headerTitle }: TProps) => (
  <PlugTemplate title={title} headerTitle={headerTitle} />
);
