// IconGallery.tsx
import { IconGallery, IconItem } from '@storybook/blocks';
import { Icon } from "@/app/components/Icon";

interface Icon {
  [key: string]: any;
}

export function renderIconGallery(icons: Icon) {
  const deprecatedIconsList = [
    'chart-donut',
    'lightning-bolt',
    'map-marker',
    'bullseye-arrow',
    'gavel',
    'account-supervisor-circle',
    'cancel',
    'help-circle',
    'sprout',
    'bullhorn',
    'barley',
    'recycle',
    'scale-balance',
    'school',
    'rocket',
    'briefcase',
    'frequently-asked-questions',
    'format-list-checks',
    'certificate-outline',
    'zip-box',
    'book-open-blank-variant',
    'book-open-variant',
    'share-variant',
    'text-box',
    'checkbox-marked-circle-outline',
    'checkbox-multiple-marked-circle-outline',
    'checkbox-multiple-marked-outline',
    'thumbs-up-down',
    'bullseye',
    'paperclip',
    'calculator-variant-outline',
    'eye',
    'eye-off',
    'dots-vertical',
    'cog',
    'lifebuoy',
    'account-multiple',
    'account-group',
    'view-dashboard',
    'library',
    'alert-decagram',
    'filter-variant',
    'arrow-top-right',
    'open-in-new',
    'clipboard-text',
    'magnify',
    'newspaper',
    'menu-down',
    'information-outline',
    'key',
    'bell',
    'bell-outline',
    'comment-outline',
    'pencil-off-outline',
    'pencil-outline',
    'file-pdf-outline',
    'thumb-up-outline',
    'comment-quote-outline',
    'note-text-outline',
    'timeline-text-outline',
    'toy-brick-outline',
    'comment-text',
    'clipboard-text-outline',
    'comment-text-multiple-outline',
    'vote',
    'shield-star',
    'cog-outline',
    'web',
    'webhook',
    'draw',
    'certificate-outline',
    'note-outline',
    'file-document-multiple',
    'more',
    'emoticon-outline',
    'exclamation-thick',
    'newspaper-variant-outline',
    'clipboard-account-outline',
    'volume-high',
    'video',
    'file-image-outline',
    'file-table-outline',
    'file-word-outline',
    'file-powerpoint-outline',
    'archive-outline',
    'file-outline',
    'arrow-left-thick',
    'arrow-right-thick',
    'volume-high',
    'alert-outline',
    'clock-outline',
    'export',
    'import',
    'file-import',
    'account-supervisor',
    'text-box-outline',
    'calendar-outline',
    'unfold-less-horizontal',
    'signature-freehand',
    'package-variant',
    'square-edit-outline',
    'form-textbox-password',
    'at',
    'lock-open-variant',
    'content-save',
    'magnify-minus-outline',
    'magnify-plus-outline',
    'hammer-screwdriver',
    'database-arrow-down-outline',
    'help-circle-outline',
    'rectangle-outline',
    'clipboard-outline',
    'dots-circle',
    'file-find',
    'circle-outline',
    'youtube',
    'linkedin',
    'instagram',
    'code-tags',
    'bottle-soda-classic-outline',
    'corn',
    'leaf',
  ];

  const iconsByFirstLetter: { [key: string]: string[] } = Object.keys(icons)
    .sort()
    .reduce((acc, icon) => {
      const firstLetter = icon.charAt(0);
      acc[firstLetter] = (acc[firstLetter] || []).concat(icon);
      return acc;
    }, {} as { [key: string]: string[] });

  const deprecatedIcons: string[] = [];

  // Parcourir les icônes et extraire celles qui sont Deprecated
  Object.entries(iconsByFirstLetter).forEach(([letter, icons]) => {
    iconsByFirstLetter[letter] = icons.filter((icon) => {
      if (deprecatedIconsList.includes(icon)) {
        deprecatedIcons.push(icon);
        return false; // Exclure l'icône de la liste principale
      }
      return true; // Garder l'icône dans la liste principale
    });
  });

  // Ajouter les icônes Deprecated à la fin
  iconsByFirstLetter['Deprecated'] = deprecatedIcons;

  return (
    <>
      {Object.entries(iconsByFirstLetter).map(([letter, icons]) => (
        <div key={letter}>
          <h2>{letter === "Deprecated" ? letter : letter.toUpperCase()}</h2>
          <IconGallery>
            {icons.map((icon) => (
              <IconItem key={icon} name={icon}>
                <Icon name={icon} addClass={letter === 'Deprecated' ? 'deprecated' : ''} />
              </IconItem>
            ))}
          </IconGallery>
        </div>
      ))}
    </>
  );
}