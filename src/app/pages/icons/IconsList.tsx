// IconGallery.tsx
import { IconGallery, IconItem } from '@storybook/blocks';
import { Icon } from "@/app/components/icons/Icon";

interface Icon {
  [key: string]: any;
}

interface IconsList {
  [key: string]: string;
}

export function renderIconGallery(icons: Icon) {
  const junkyardIconsList: IconsList = {
    'checkbox-marked-outline': 'checkbox-marked-outline',
  }

  const deprecatedIconsList: IconsList = {
    'chart-donut': 'plan-data',
    'lightning-bolt': 'admin',
    'map-marker': 'location',
    'bullseye-arrow': 'objective',
    'gavel': 'evaluation',
    'account-supervisor-circle': 'coaching',
    'help-circle': 'impact-not-obvious',
    'sprout': 'impact-native',
    'bullhorn': 'impact-push',
    'barley': 'vertical-food',
    'recycle': 'vertical-plastic',
    'scale-balance': 'impact-equitable or vertical-dei',
    'school': 'program or ecosystem-student',
    'rocket': 'ecosystem-startups',
    'briefcase': 'ecosystem-corporate or work',
    'frequently-asked-questions': 'faq',
    'format-list-checks': 'form-checklist',
    'zip-box': 'file-zip-box',
    'book-open-blank-variant': 'content',
    'book-open-variant': 'content',
    'share-variant': 'share',
    'text-box': 'file-document-box',
    'checkbox-marked-circle-outline': 'form-radio-marked',
    'checkbox-multiple-marked-circle-outline': 'form-radio-marked',
    'checkbox-multiple-marked-outline': 'form-checkbox-marked',
    'thumbs-up-down': 'votes',
    'bullseye': 'tag',
    'paperclip': 'attachment',
    'calculator-variant-outline': 'number',
    'eye': 'visibility',
    'eye-off': 'visibility-off',
    'dots-vertical': 'options',
    'cog': 'settings',
    'lifebuoy': 'help-center',
    'account-multiple': 'members',
    'account-group': 'community',
    'view-dashboard': 'dashboard',
    'library': 'learning',
    'alert-decagram': 'release',
    'filter-variant': 'filter',
    'arrow-top-right': 'new-tab',
    'open-in-new': 'new-tab',
    'clipboard-text': 'project',
    'magnify': 'search',
    'newspaper': 'newsfeed',
    'menu-down': 'dropdown',
    'information-outline': 'information',
    'key': 'service-sso',
    'bell': 'notifications',
    'bell-outline': 'notifications-none',
    'comment-outline': 'comment',
    'pencil-off-outline': 'pencil-off',
    'pencil-outline': 'pencil',
    'file-pdf-outline': 'file-pdf-box',
    'thumb-up-outline': 'thumb-up',
    'comment-quote-outline': 'votes',
    'note-text-outline': 'notes',
    'timeline-text-outline': 'timeline',
    'toy-brick-outline': 'learning',
    'comment-text': 'comment',
    'clipboard-text-outline': 'questionnaire',
    'comment-text-multiple-outline': 'comment',
    'vote': 'rating',
    'shield-star': 'admin',
    'cog-outline': 'settings',
    'web': 'public-page',
    'webhook': 'code',
    'draw': 'signature',
    'certificate-outline': 'certificate',
    'note-outline': 'file-document-box',
    'file-document-multiple': 'attachment',
    'more': 'options',
    'emoticon-outline': 'questionnaire',
    'exclamation-thick': 'alert',
    'newspaper-variant-outline': 'newsfeed',
    'clipboard-account-outline': 'members',
    'volume-high': 'file-audio-box',
    'video': 'file-play-box',
    'file-image-outline': 'image',
    'file-table-outline': 'file-csv-box',
    'file-word-outline': 'file-word-box',
    'file-powerpoint-outline': 'file-powerpoint-box',
    'archive-outline': 'file-zip-box',
    'file-outline': 'attachment',
    'arrow-left-thick': 'chevron-left',
    'arrow-right-thick': 'chevron-right',
    'alert-outline': 'alert',
    'clock-outline': 'time',
    'export': 'download',
    'import': 'upload',
    'file-import': 'upload',
    'account-supervisor': 'coaching',
    'text-box-outline': 'file-document-box',
    'calendar-outline': 'calendar-blank',
    'unfold-less-horizontal': 'unfold-less',
    'signature-freehand': 'signature',
    'package-variant': 'toolbox',
    'square-edit-outline': 'pencil',
    'form-textbox-password': 'lock',
    'at': 'link',
    'lock-open-variant': 'lock-open',
    'content-save': 'save',
    'magnify-minus-outline': 'zoom-minus',
    'magnify-plus-outline': 'zoom-plus',
    'hammer-screwdriver': 'toolbox',
    'database-arrow-down-outline': 'download',
    'help-circle-outline': 'help',
    'rectangle-outline': 'shapes',
    'clipboard-outline': 'project',
    'dots-circle': 'status dashed',
    'file-find': 'seo',
    'circle-outline': 'status-bordered ',
    'youtube': 'brand-youtube',
    'linkedin': 'brand-linkedin',
    'instagram': 'brand-instagram',
    'code-tags': 'code',
    'bottle-soda-classic-outline': 'vertical-plastic',
    'corn': 'vertical-food',
    'leaf': 'impact-sustainable',
    'content-duplicate': 'copy',
    'file-cancel-outline': 'cancel',
    'format-text': 'format-title',
  };

  const iconsByFirstLetter: { [key: string]: string[] } = Object.keys(icons)
    .sort()
    .reduce((acc, icon) => {
      const firstLetter = icon.charAt(0);
      acc[firstLetter] = (acc[firstLetter] || []).concat(icon);
      return acc;
    }, {} as { [key: string]: string[] });

  const junkyardIcons: string[] = [];

  // Parcourir les icônes et extraire celles qui sont dans la Junkyard
  Object.entries(iconsByFirstLetter).forEach(([letter, icons]) => {
    iconsByFirstLetter[letter] = icons.filter((icon) => {
      if (icon in junkyardIconsList) {
        junkyardIcons.push(icon);
        return false; // Exclure l'icône de la liste principale
      }
      return true; // Garder l'icône dans la liste principale
    });
  });

  const deprecatedIcons: string[] = [];

  // Parcourir les icônes et extraire celles qui sont Deprecated
  Object.entries(iconsByFirstLetter).forEach(([letter, icons]) => {
    iconsByFirstLetter[letter] = icons.filter((icon) => {
      if (icon in deprecatedIconsList) {
        deprecatedIcons.push(icon);
        return false; // Exclure l'icône de la liste principale
      }
      return true; // Garder l'icône dans la liste principale
    });
  });

  // Ajouter les icônes Junkyard à la fin
  iconsByFirstLetter['Junkyard'] = junkyardIcons;

  // Ajouter les icônes Deprecated à la fin
  iconsByFirstLetter['Deprecated'] = deprecatedIcons;

  return (
    <>
      {Object.entries(iconsByFirstLetter).map(([letter, icons]) => (
        <div key={letter}>
          <h2>{(letter === "Deprecated" || letter === "Junkyard") ? letter : letter.toUpperCase()}</h2>
          <IconGallery>
            {icons.map((icon) => (
              <IconItem key={icon} name={letter === 'Deprecated' ? `${icon} (${deprecatedIconsList[icon]})` : icon}>
                <Icon name={icon} addClass={letter === 'Deprecated' ? 'deprecated' : ''} />
              </IconItem>
            ))}
          </IconGallery>
        </div>
      ))}
    </>
  );
}