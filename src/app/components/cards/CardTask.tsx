import React from "react";
import { CardCollapse } from "./CardCollapse";

interface CardTaskProps {}

export const CardTask = ({}: CardTaskProps) => {
    return (
        <div id="accordionTasks">
            <CardCollapse id="1" parentId="accordionTasks" title="Livrables" progress={33}>
                <form>
                    <fieldset className="form-group">
                        <legend className="label">Stakeholder Map</legend>
                        <small className="form-text text-muted">Using the templates below, upload your files</small>
                        <div className="d-flex flex-column gap-xs">
                            <div className="item is-bordered is-small">
                                <div className="item-row">
                                    <div className="item-row">
                                        <span className="item-icon icon icon-file-pdf-box text-danger" />
                                        <div className="item-content">
                                            <a className="item-title stretched-link text-truncate" href="#">
                                                Template Stakeholder Map.pdf
                                            </a>
                                            <ul className="item-caption metas small is-list">
                                                <li>
                                                    <span>PDF File</span>
                                                </li>
                                                <li>
                                                    <span>420 KB</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-options">
                                        <a className="btn btn-transparent btn-icon z-1" href="#" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item is-bordered">
                                <div className="item-row">
                                    <div className="item-row">
                                        <span className="item-icon icon icon-file-pdf-box text-danger" />
                                        <div className="item-content">
                                            <a className="item-title stretched-link text-truncate" href="#">
                                                1693312536923.pdf
                                            </a>
                                            <ul className="item-caption metas small is-list">
                                                <li>
                                                    <span>PDF File</span>
                                                </li>
                                                <li>
                                                    <span>420 KB</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-options">
                                        <a className="btn btn-transparent btn-icon z-1" href="#" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                        <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window">
                                            <a className="btn btn-transparent btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">
                                                    Edit file
                                                </a>
                                                <a href="#" className="dropdown-item is-danger">
                                                    Delete file
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn btn-lg btn-block btn-default disabled">
                                <span className="icon icon-pencil" />
                                <span>Edit new document</span>
                            </a>
                        </div>
                    </fieldset>
                    <fieldset className="form-group">
                        <legend className="label">Contacts prioritaires</legend>
                        <div className="d-flex flex-column gap-xs">
                            <div className="addResourceContainer " id="addResourceContainer" data-maxfiles={1} data-maxfilesremaining={1} data-no-file-limit={0}>
                                <button className="btn btn-lg btn-block btn-default dropdown-toggle addResourceButton" data-toggle="dropdown">
                                    <span className="icon icon-plus-circle" />
                                    <span>Add resource</span>
                                </button>
                                <div className="dropdown-menu">
                                    <span className="dropdown-item">
                                        <span className="dropdown-item--icon icon icon-attachment" />
                                        <span>Add document</span>
                                    </span>
                                    <span className="dropdown-item">
                                        <span className="dropdown-item--icon icon icon-link" />
                                        <span>Add link</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label htmlFor="exemple">Nom du projet</label>
                        <input type="text" id="exemple" required data-hint="name" aria-describedby="exemple_help" className="form-control" defaultValue="TidyCards" placeholder="Your response here..." />
                        <div className="invalid-feedback">Please enter a message in the textarea.</div>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="form_543_1343">
                            Problématique affinée
                        </label>
                        <textarea
                            id="form_543_1343"
                            name="form_543[1343]"
                            maxLength={800}
                            className="form-control field-sizing"
                            rows={4}
                            defaultValue={
                                "TidyCards est une application web qui vous permet d’organiser et de partager facilement vos liens ! Que ce soient des articles, des vidéos, des tweets ou toutes sortes de contenus.\n\nVous avez des dizaines de dossiers de favoris et vous ne vous y retrouvez plus ? Créez une liste : ajoutez-lui un titre, une description et une image puis ajoutez vos liens. Vous pouvez également leur ajouter un commentaire. Ainsi vous retrouverez facilement vos sites préférés."
                            }
                        />
                    </div>
                    <fieldset className="form-group">
                        <legend className="label">Validez la proposition</legend>
                        <div className="form-options" id="radio" aria-describedby="exemple_help">
                            <div className="custom-control custom-radio">
                                <input type="radio" id="radio_0" name="radio" className="custom-control-input" defaultValue={0} defaultChecked />
                                <label className="custom-control-label" htmlFor="radio_0">
                                    Oui
                                </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="radio_1" name="radio" className="custom-control-input" defaultValue={1} />
                                <label className="custom-control-label" htmlFor="radio_1">
                                    Non
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-group">
                        <legend className="label">Selectionnez un cas d'usage</legend>
                        <div className="form-options" id="checkbox" aria-describedby="exemple_help">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="checkbox_0" name="checkbox" className="custom-control-input" defaultValue={0} defaultChecked />
                                <label className="custom-control-label" htmlFor="checkbox_0">
                                    Cas simple
                                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="checkbox_1" name="checkbox" className="custom-control-input" defaultValue={1} defaultChecked />
                                <label className="custom-control-label" htmlFor="checkbox_1">
                                    Cas complexe
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </CardCollapse>

            <CardCollapse id="2" parentId="accordionTasks" title="Livrables" progress={100} metas={[{label: "Read only"},{label:"4 required fields"}]}>
                <form>
                    <fieldset className="form-group">
                        <legend className="label">Stakeholder Map</legend>
                        <small className="form-text text-muted">Using the templates below, upload your files</small>
                        <div className="d-flex flex-column gap-xs">
                            <div className="item is-bordered is-small">
                                <div className="item-row">
                                    <div className="item-row">
                                        <span className="item-icon icon icon-file-pdf-box text-danger" />
                                        <div className="item-content">
                                            <a className="item-title stretched-link text-truncate" href="#">
                                                Template Stakeholder Map.pdf
                                            </a>
                                            <ul className="item-caption metas small is-list">
                                                <li>
                                                    <span>PDF File</span>
                                                </li>
                                                <li>
                                                    <span>420 KB</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-options">
                                        <a className="btn btn-transparent btn-icon z-1" href="#" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item is-bordered">
                                <div className="item-row">
                                    <div className="item-row">
                                        <span className="item-icon icon icon-file-pdf-box text-danger" />
                                        <div className="item-content">
                                            <a className="item-title stretched-link text-truncate" href="#">
                                                1693312536923.pdf
                                            </a>
                                            <ul className="item-caption metas small is-list">
                                                <li>
                                                    <span>PDF File</span>
                                                </li>
                                                <li>
                                                    <span>420 KB</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="item-options">
                                        <a className="btn btn-transparent btn-icon z-1" href="#" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window">
                                            <span className="icon icon-cloud-download" />
                                        </a>
                                        <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window">
                                            <a className="btn btn-transparent btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window">
                                                <span className="icon icon-options" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">
                                                    Edit file
                                                </a>
                                                <a href="#" className="dropdown-item is-danger">
                                                    Delete file
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-group">
                        <legend className="label">Contacts prioritaires</legend>
                        <div className="d-flex flex-column gap-xs">
                            <div className="bg-highlight rounded d-flex align-items-center justify-content-center gap-2xs px-md py-2xl">
                                <span className="icon icon-attachment text-muted" />
                                <p className="small text-muted text-center">
                                    <span>No resource for this question…</span>
                                </p>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label htmlFor="exemple2">Nom du projet</label>
                        <input readOnly type="text" id="exemple2" required data-hint="name" aria-describedby="exemple_help" className="form-control" defaultValue="TidyCards" placeholder="Your response here..." />
                        <div className="invalid-feedback">Please enter a message in the textarea.</div>
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="form_543_1344">
                            Problématique affinée
                        </label>
                        <textarea
                            readOnly
                            id="form_543_1344"
                            name="form_543[1343]"
                            maxLength={800}
                            className="form-control field-sizing"
                            rows={4}
                            defaultValue={
                                "TidyCards est une application web qui vous permet d’organiser et de partager facilement vos liens ! Que ce soient des articles, des vidéos, des tweets ou toutes sortes de contenus.\n\nVous avez des dizaines de dossiers de favoris et vous ne vous y retrouvez plus ? Créez une liste : ajoutez-lui un titre, une description et une image puis ajoutez vos liens. Vous pouvez également leur ajouter un commentaire. Ainsi vous retrouverez facilement vos sites préférés."
                            }
                        />
                    </div>
                    <fieldset className="form-group">
                        <legend className="label">Validez la proposition</legend>
                        <div className="form-options" id="radio" aria-describedby="exemple_help">
                            <div className="custom-control custom-radio">
                                <input type="radio" id="radio_2" name="radio" className="custom-control-input" defaultValue={0} defaultChecked disabled />
                                <label className="custom-control-label" htmlFor="radio_2">
                                    Oui
                                </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input type="radio" id="radio_3" name="radio" className="custom-control-input" defaultValue={1} disabled />
                                <label className="custom-control-label" htmlFor="radio_3">
                                    Non
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form-group">
                        <legend className="label">Selectionnez un cas d'usage</legend>
                        <div className="form-options" id="checkbox" aria-describedby="exemple_help">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="checkbox_2" name="checkbox" className="custom-control-input" defaultValue={0} defaultChecked disabled />
                                <label className="custom-control-label" htmlFor="checkbox_2">
                                    Cas simple
                                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="checkbox_3" name="checkbox" className="custom-control-input" defaultValue={1} defaultChecked disabled />
                                <label className="custom-control-label" htmlFor="checkbox_3">
                                    Cas complexe
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </CardCollapse>
        </div>
    );
};
