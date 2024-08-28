import React from "react";

interface PageAsideCapsulesProps {}

export const PageAsideCapsules = ({}: PageAsideCapsulesProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>
                <aside className="application-aside is-small">
                    <div className="aside-content-container">
                        <div className="aside-header">
                            <h3 className="aside-title line-clamp-1">
                                <span className="text-truncate">Capsules</span>
                                <ul className="list-inline list-dotted text-muted mb-none">
                                    <li className="list-inline-item small">8 capsules</li>
                                </ul>
                            </h3>
                            <div className="aside-actions">
                                <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                                    <span className="icon icon-close is-24px" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="aside-body">
                            <ul className="list-timeline list-timeline-group">
                                <li className="list-timeline-item is-progress">
                                    <a className="list-timeline-item--content" href="/program/147/course/49">
                                        <div className="form-row">
                                            <div className="col-auto">
                                                <svg className="progress-circle-container " viewBox="0 0 32 32" data-percent={13} style={{ ["--percent" as any]: 13 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={20}>
                                                        1/8
                                                    </text>
                                                </svg>
                                            </div>
                                            <div className="col d-flex flex-column justify-content-center">
                                                <div className="list-timeline-item--title font-weight-bold"> Lancer sa stratégie d'observation </div>
                                                <div className="list-timeline-item--subtitle text-muted">
                                                    <ul className="metas small is-list mb-3">
                                                        <li> From 11/03/2022 </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <ul className="list-timeline-items">
                                        <li className="list-timeline-item has-sm-icon is-done">
                                            <span className="list-timeline-item--content text-muted">
                                                <div className="form-row">
                                                    <div className="col-auto">
                                                        <div className="d-flex px-1 mx-3">
                                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                                <circle className="progress-circle progress-circle-bg" />
                                                                <circle className="progress-circle progress-circle-percent" />
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="list-timeline-item--title font-weight-bold text-primary"> La roadmap d'observation </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </li>
                                        <li className="list-timeline-item has-sm-icon is-progress">
                                            <a className="list-timeline-item--content" href="/program/147/participant/module/5211">
                                                <div className="form-row">
                                                    <div className="col-auto">
                                                        <div className="d-flex px-1 mx-3">
                                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={99} style={{ ["--percent" as any]: 99 }}>
                                                                <circle className="progress-circle progress-circle-bg" />
                                                                <circle className="progress-circle progress-circle-percent" />
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="list-timeline-item--title"> Deux types d'observation - la recherche </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-timeline-item has-sm-icon is-progress">
                                            <a className="list-timeline-item--content" href="/program/147/participant/module/5212">
                                                <div className="form-row">
                                                    <div className="col-auto">
                                                        <div className="d-flex px-1 mx-3">
                                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={99} style={{ ["--percent" as any]: 99 }}>
                                                                <circle className="progress-circle progress-circle-bg" />
                                                                <circle className="progress-circle progress-circle-percent" />
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="list-timeline-item--title"> Deux types d'observation - le terrain </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-timeline-item has-sm-icon is-progress">
                                            <a className="list-timeline-item--content" href="/program/147/participant/module/5506">
                                                <div className="form-row">
                                                    <div className="col-auto">
                                                        <div className="d-flex px-1 mx-3">
                                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={99} style={{ ["--percent" as any]: 99 }}>
                                                                <circle className="progress-circle progress-circle-bg" />
                                                                <circle className="progress-circle progress-circle-percent" />
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="list-timeline-item--title"> Cerner les enjeux environnementaux </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-timeline-item has-sm-icon is-progress">
                                            <a className="list-timeline-item--content" href="/program/147/participant/module/5213">
                                                <div className="form-row">
                                                    <div className="col-auto">
                                                        <div className="d-flex px-1 mx-3">
                                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={99} style={{ ["--percent" as any]: 99 }}>
                                                                <circle className="progress-circle progress-circle-bg" />
                                                                <circle className="progress-circle progress-circle-percent" />
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="list-timeline-item--title"> L'identification des acteurs à interroger </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-timeline-item has-sm-icon is-progress">
                                            <a className="list-timeline-item--content" href="/program/147/participant/module/5214">
                                                <div className="form-row">
                                                    <div className="col-auto">
                                                        <div className="d-flex px-1 mx-3">
                                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={99} style={{ ["--percent" as any]: 99 }}>
                                                                <circle className="progress-circle progress-circle-bg" />
                                                                <circle className="progress-circle progress-circle-percent" />
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="list-timeline-item--title"> La rédaction d'un guide d'entretien </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-timeline-item has-sm-icon is-progress">
                                            <a className="list-timeline-item--content" href="/program/147/participant/module/5215">
                                                <div className="form-row">
                                                    <div className="col-auto">
                                                        <div className="d-flex px-1 mx-3">
                                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={99} style={{ ["--percent" as any]: 99 }}>
                                                                <circle className="progress-circle progress-circle-bg" />
                                                                <circle className="progress-circle progress-circle-percent" />
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="list-timeline-item--title"> L'entretien semi-directif </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-timeline-item has-sm-icon is-progress">
                                            <a className="list-timeline-item--content" href="/program/147/participant/module/5216">
                                                <div className="form-row">
                                                    <div className="col-auto">
                                                        <div className="d-flex px-1 mx-3">
                                                            <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={99} style={{ ["--percent" as any]: 99 }}>
                                                                <circle className="progress-circle progress-circle-bg" />
                                                                <circle className="progress-circle progress-circle-percent" />
                                                                <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="list-timeline-item--title"> Synthétiser ses entretiens </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="aside-footer">
                            <div className="d-flex gap-xs ml-auto">
                                <button className="btn btn-lg btn-default close-aside">Cancel</button>
                            </div>
                        </div>
                    </div>
                    <div className="aside-content-container d-none">
                        <div className="aside-header">
                            <h3 className="aside-title line-clamp-1">
                                <span className="text-truncate">Take a quiz</span>
                                <ul className="list-inline list-dotted text-muted mb-none">
                                    <li className="list-inline-item small">5 questions</li>
                                </ul>
                            </h3>
                            <div className="aside-actions">
                                <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                                    <span className="icon icon-close is-24px" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="aside-body">
                            <fieldset className="form-group">
                                <legend className="active checkbox-custom col-form-label font-weight-bold">Question...</legend>
                                <div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-1-1" name="id-1" className="custom-control-input" defaultValue={0} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-1-1">
                                            Answer 1
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-1-2" name="id-1" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-1-2">
                                            Answer 2
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-1-3" name="id-1" className="custom-control-input" defaultValue={2} checked />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-1-3">
                                            Answer 3
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="form-group">
                                <legend className="active checkbox-custom col-form-label font-weight-bold">Question...</legend>
                                <div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-2-1" name="id-2" className="custom-control-input" defaultValue={0} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-2-1">
                                            Answer 1
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-2-2" name="id-2" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-2-2">
                                            Answer 2
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-2-3" name="id-2" className="custom-control-input" defaultValue={2} checked />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-2-3">
                                            Answer 3
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="form-group">
                                <legend className="active checkbox-custom col-form-label font-weight-bold">Question...</legend>
                                <div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-3-1" name="id-3" className="custom-control-input" defaultValue={0} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-3-1">
                                            Answer 1
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-3-2" name="id-3" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-3-2">
                                            Answer 2
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-3-3" name="id-3" className="custom-control-input" defaultValue={2} checked />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-3-3">
                                            Answer 3
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="form-group">
                                <legend className="active checkbox-custom col-form-label font-weight-bold">Question...</legend>
                                <div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-4-1" name="id-4" className="custom-control-input" defaultValue={0} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-4-1">
                                            Answer 1
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-4-2" name="id-4" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-4-2">
                                            Answer 2
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-4-3" name="id-4" className="custom-control-input" defaultValue={2} checked />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-4-3">
                                            Answer 3
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="form-group">
                                <legend className="active checkbox-custom col-form-label font-weight-bold">Question...</legend>
                                <div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-5-1" name="id-5" className="custom-control-input" defaultValue={0} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-5-1">
                                            Answer 1
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-5-2" name="id-5" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-5-2">
                                            Answer 2
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="id-5-3" name="id-4" className="custom-control-input" defaultValue={2} checked />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-4-3">
                                            Answer 3
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="aside-footer">
                            <div className="d-flex gap-xs ml-auto">
                                <button className="btn btn-lg btn-default close-aside">Cancel</button>
                                <button type="submit" className="btn btn-lg btn-primary">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="aside-content-container d-none">
                        <div className="aside-header">
                            <h3 className="aside-title line-clamp-1">
                                <span className="text-truncate">Give feedback</span>
                                <ul className="list-inline list-dotted text-muted mb-none">
                                    <li className="list-inline-item small">2 questions</li>
                                </ul>
                            </h3>
                            <div className="aside-actions">
                                <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                                    <span className="icon icon-close is-24px" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="aside-body">
                            <div className="form-group">
                                <p>Vos commentaires sont précieux pour nous aider à améliorer nos formations.</p>
                                <label className="checkbox-custom font-weight-bold" htmlFor="form_554_1374">
                                    Qu'avez-vous pensé des contenus?
                                </label>
                                <div className="rating">
                                    <div className="rating-well">
                                        <input type="text" id="form_554_1374" name="form_554[1374]" className="rating form-control" />
                                        <div id="rating_star_5" className="star" data-value={5} />
                                        <div id="rating_star_4" className="star" data-value={4} />
                                        <div id="rating_star_3" className="star" data-value={3} />
                                        <div id="rating_star_2" className="star" data-value={2} />
                                        <div id="rating_star_1" className="star" data-value={1} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="checkbox-custom font-weight-bold" htmlFor="form_554_1372">
                                    Avez-vous des commentaires?
                                </label>
                                <textarea
                                    id="form_554_1372"
                                    name="form_554[1372]"
                                    aria-describedby="form_554_1372_help"
                                    rows={4}
                                    className="form-control"
                                    style={{
                                        overflow: "hidden",
                                        overflowWrap: "break-word",
                                        resize: "none",
                                        height: 102,
                                    }}
                                    defaultValue={"                "}
                                />
                            </div>
                        </div>
                        <div className="aside-footer">
                            <div className="d-flex gap-xs ml-auto">
                                <button className="btn btn-lg btn-default close-aside">Cancel</button>
                                <button type="submit" className="btn btn-lg btn-primary">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
