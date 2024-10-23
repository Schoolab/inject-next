import React from "react";
import { useEffect } from "react";

import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideCapsules } from "@/app/components/asides/AsideCapsules";
import { aside } from "../../../../public/utils/aside";

export const LearningCapsule = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout>
            <AppContent showSubnav={false} sections="separated" isAsside={true}>
                <div className="d-flex align-items-start">
                    <div className="container-lg container-fluid">
                        <div className="row justify-content-center flex-grow-1">
                            <div className="col-12 col-xl-10 ">
                                <div className="application-section">
                                    <div className="embed-responsive mb-3 embed-responsive-16by9">
                                        <iframe className="mediaIframe" src="https://www.youtube.com/embed/lkhnjQroNrM" width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} scrolling="no" allow="fullscreen;autoplay" />
                                    </div>
                                    <div className="text-justify mb-5">
                                        <p>
                                            <span style={{ color: "#c0392b" }}>
                                                <strong>Deux types d'observation - La recherche</strong>
                                            </span>
                                        </p>
                                        <p>
                                            Le{" "}
                                            <span style={{ color: "#006850" }}>
                                                <strong>benchmark</strong>
                                            </span>{" "}
                                            est une méthode utilisée pour analyser ses concurrents directs ou indirects sur un marché. Il vous servira à comprendre votre marché et comment l'utilisateur répond à ses problèmes avec les solutions existantes.
                                        </p>
                                        <p>Il existe 2 types de benchmarks : le concurrentiel et le fonctionnel.</p>
                                        <ul>
                                            <li>
                                                <span style={{ color: "#000066" }}>
                                                    <strong>Concurrentiel</strong>
                                                </span>{" "}
                                                : comprendre les acteurs présents sur un marché et les bonnes pratiques qu'ils mettent en place.
                                            </li>
                                            <li>
                                                <span style={{ color: "#000066" }}>
                                                    <strong>Fonctionnel</strong>
                                                </span>{" "}
                                                : analyser les acteurs performants et les raisons de leurs succès.&nbsp;{" "}
                                                <ul>
                                                    <li>Quelles expériences utilisateurs proposent-ils ?</li>
                                                    <li>Quelles fonctionalités spécifiques ont-ils développé ?</li>
                                                    <li>Comment répondent-ils aux besoins ?</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>Allez sur les sites internet et réseaux sociaux de vos concurrents pour réaliser ces benchmarks. Restez également à jour sur les nouveautés.</p>
                                        <p>Une étude de benchmarking se fait en 5 étapes :</p>
                                        <ul>
                                            <li>
                                                <span style={{ color: "#006850" }}>
                                                    <strong>Identifier</strong>
                                                </span>{" "}
                                                la solution et les fonctionnalités.&nbsp;
                                            </li>
                                            <li>
                                                <span style={{ color: "#ff906a" }}>
                                                    <strong>Choisir</strong>
                                                </span>{" "}
                                                les indicateurs de performance.
                                            </li>
                                            <li>
                                                <span style={{ color: "#ef9cc3" }}>
                                                    <strong>Chercher</strong>
                                                </span>{" "}
                                                et listez les entreprises présentes sur le marché.
                                            </li>
                                            <li>
                                                <span style={{ color: "#f1c40f" }}>
                                                    <strong>Mesurer</strong>
                                                </span>{" "}
                                                les performances avec les indicateurs.
                                            </li>
                                            <li>
                                                <span style={{ color: "#c0392b" }}>
                                                    <strong>Restituer</strong>
                                                </span>{" "}
                                                l'étude avec une matrice concurrentielle et un mapping de la concurrence.
                                            </li>
                                        </ul>
                                        <p>
                                            L'analyse{" "}
                                            <span style={{ color: "#006850" }}>
                                                <strong>PESTEL</strong>
                                            </span>{" "}
                                            est complémentaire du benchmark. En plus de prendre en compte les concurrents directs et indirects, elle s'appuie sur des facteurs maacro-économiques.
                                        </p>
                                        <p>Pour la réaliser, vous devrez analyser les forces d'influences macro-économiques d'un secteur en interviewant des experts et en faisant des recherches sur Internet :</p>
                                        <ul>
                                            <li>
                                                <span style={{ color: "#006850" }}>
                                                    <strong>Politique</strong>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ color: "#ff906a" }}>
                                                    <strong>Économique</strong>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ color: "#ef9cc3" }}>
                                                    <strong>Socio-culturel</strong>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ color: "#f1c40f" }}>
                                                    <strong>Technologique</strong>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ color: "#c0392b" }}>
                                                    <strong>Écologique</strong>
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ color: "#000066" }}>
                                                    <strong>Législatif</strong>
                                                </span>
                                            </li>
                                        </ul>
                                        <p>
                                            <em>Vous pouvez retrouver les canvas vierges de la matrice concurrenrielle et du mapping de la concurrence dans l'onglet "ressources".</em>
                                        </p>
                                    </div>
                                    <div className="card formContainer mb-5 mx-0" data-form={543}>
                                        <div className="card-header" data-toggle="collapse" data-target="#form-543" aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <div className="mr-3">
                                                    <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any] : 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                </div>
                                                <span>
                                                    <strong>Livrables</strong>
                                                    <span className="formRequiredFieldsContainer d-none">
                                                        <p className="text-muted">
                                                            <span className="formRequiredFieldsNb">0</span>
                                                            <span className="formRequiredFieldsText" data-singletext="tâche obligatoire restante" data-multipletext="tâches obligatoires restantes">
                                                                {" "}
                                                                tâche obligatoire restante{" "}
                                                            </span>
                                                        </p>
                                                    </span>
                                                </span>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </div>
                                        </div>
                                        <div className="card-body collapse " id="form-543" style={{}}>
                                            <form name="form_543" method="post" className="autoSaveForm">
                                                <div id="form_543" className="autoSaveForm">
                                                    <div className="form-group">
                                                        <div className="uploadSignedUrlFileContainer formUploadContainer mb-3" data-installed={1}>
                                                            <legend className="active checkbox-custom font-weight-bold col-form-label">Matrice comparative des concurrents</legend>
                                                            <small className="text-muted text-uppercase">Template</small>
                                                            <div id="resourceList" className="resourcesWallWrapper">
                                                                <div className="resourcesWrapper ">
                                                                    <section className="templateResourcesList">
                                                                        <div className="item is-bordered resource mb-3">
                                                                            <div className="item-row">
                                                                                <div className="item-row cursorLink triggerResource" data-toggle="modal" data-url="/resource/36a76e66-d51f-47a2-8c82-a78ba52f41cf/load?browse=0" data-target="#resourceLoadingModal">
                                                                                    <div className="item-icon icon icon-file-pdf-box text-danger" />
                                                                                    <div className="item-content ml-3">
                                                                                        <a className="item-title h4 mb-none stretched-link text-truncate" href="#">
                                                                                            Matrice concurrents.pdf
                                                                                        </a>
                                                                                        <ul className="item-caption metas small is-list">
                                                                                            <li>
                                                                                                <span className="icon icon-time">&nbsp;02/03/2023 18:54</span>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="item-options">
                                                                                    <a className="btn btn-lg btn-transparent btn-icon" href="/resource/36a76e66-d51f-47a2-8c82-a78ba52f41cf/download">
                                                                                        <span className="icon icon-cloud-download" />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                    <div className="resourceEmptyState d-none">
                                                                        <div className="d-flex flex-column align-items-center py-5">
                                                                            <span className="text-muted icon icon-file-outline is-lg" />
                                                                            <p className="text-muted text-center mt-4">
                                                                                <span>No document</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <small className="text-muted text-uppercase">uploaded files</small>
                                                            <section className="resourcesList">
                                                                <div className="item is-bordered resource mb-3">
                                                                    <div className="item-row">
                                                                        <div className="item-row cursorLink triggerResource" data-toggle="modal" data-url="/resource/fcca2b8c-9988-484a-a02a-da34725d0c9b/load?browse=0" data-target="#resourceLoadingModal">
                                                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                                                            <div className="item-content ml-3">
                                                                                <a className="item-title h4 mb-none stretched-link text-truncate" href="#">
                                                                                    1681721694647.pdf
                                                                                </a>
                                                                                <ul className="item-caption metas small is-list">
                                                                                    <li>
                                                                                        <span className="icon icon-time">&nbsp;17/04/2023 10:54</span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="item-options">
                                                                            <a className="btn btn-lg btn-transparent btn-icon" href="/resource/fcca2b8c-9988-484a-a02a-da34725d0c9b/download">
                                                                                <span className="icon icon-cloud-download" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="item-options dropdown">
                                                                            <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <span className="icon icon-options" />
                                                                            </a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item editResourceButton" href="#" data-target="#loadingContentModal" data-toggle="modal" data-url="/resource/8612/edit-modal">
                                                                                    {" "}
                                                                                    Modifier{" "}
                                                                                </a>
                                                                                <span className="dropdown-item text-danger resourceDeleteLink cursorLink" data-url="/rest/fr/resource/8612/delete">
                                                                                    Supprimer
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <span
                                                                className="btn btn-lg btn-block btn-default editTemplateButton disabled"
                                                                data-toggle="modal"
                                                                data-target="#loadingContentModal"
                                                                data-url="/challenge/53/state/785/application/638/form/427/field/1339/template/edit"
                                                                data-signed-url="/rest/fr/program/53/state/785/application/638/form/427/field/1339/resource/signed-url"
                                                                data-done-url="/rest/fr/program/53/state/785/application/638/form/427/field/1339/resource/upload"
                                                                data-maxfiles={1}
                                                                data-maxfilesremaining={0}
                                                            >
                                                                {" "}
                                                                Editer un nouveau document{" "}
                                                            </span>
                                                            <div data-error-related="form_543_1339" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="uploadSignedUrlFileContainer formUploadContainer mb-3" data-installed={1}>
                                                            <legend className="active checkbox-custom font-weight-bold col-form-label">Stakeholder map</legend>
                                                            <small className="text-muted text-uppercase">template</small>
                                                            <div id="resourceList" className="resourcesWallWrapper">
                                                                <div className="resourcesWrapper ">
                                                                    <section className="templateResourcesList">
                                                                        <div className="item is-bordered resource mb-3">
                                                                            <div className="item-row">
                                                                                <div className="item-row cursorLink triggerResource" data-toggle="modal" data-url="/resource/e5a63a2b-ca6c-497f-868d-9992725c370e/load?browse=0" data-target="#resourceLoadingModal">
                                                                                    <div className="item-icon icon icon-file-pdf-box text-danger" />
                                                                                    <div className="item-content ml-3">
                                                                                        <a className="item-title h4 mb-none stretched-link text-truncate" href="#">
                                                                                            Stakeholder map (1).pdf
                                                                                        </a>
                                                                                        <ul className="item-caption metas small is-list">
                                                                                            <li>
                                                                                                <span className="icon icon-time">&nbsp;02/03/2023 18:54</span>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="item-options">
                                                                                    <a className="btn btn-lg btn-transparent btn-icon" href="/resource/e5a63a2b-ca6c-497f-868d-9992725c370e/download">
                                                                                        <span className="icon icon-cloud-download" />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                    <div className="resourceEmptyState d-none">
                                                                        <div className="d-flex flex-column align-items-center py-5">
                                                                            <span className="text-muted icon icon-file-outline is-lg" />
                                                                            <p className="text-muted text-center mt-4">
                                                                                <span>No document</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <small className="text-muted text-uppercase">uploaded files</small>
                                                            <section className="resourcesList">
                                                                <div className="item is-bordered resource mb-3">
                                                                    <div className="item-row">
                                                                        <div className="item-row cursorLink triggerResource" data-toggle="modal" data-url="/resource/5a58c68b-9a75-4a2f-8f40-ac134fc4b696/load?browse=0" data-target="#resourceLoadingModal">
                                                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                                                            <div className="item-content ml-3">
                                                                                <a className="item-title h4 mb-none stretched-link text-truncate" href="#">
                                                                                    1693312536923.pdf
                                                                                </a>
                                                                                <ul className="item-caption metas small is-list">
                                                                                    <li>
                                                                                        <span className="icon icon-time">&nbsp;29/08/2023 14:35</span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="item-options">
                                                                            <a className="btn btn-lg btn-transparent btn-icon" href="/resource/5a58c68b-9a75-4a2f-8f40-ac134fc4b696/download">
                                                                                <span className="icon icon-cloud-download" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="item-options dropdown">
                                                                            <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <span className="icon icon-options" />
                                                                            </a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item editResourceButton" href="#" data-target="#loadingContentModal" data-toggle="modal" data-url="/resource/8786/edit-modal">
                                                                                    {" "}
                                                                                    Modifier{" "}
                                                                                </a>
                                                                                <span className="dropdown-item text-danger resourceDeleteLink cursorLink" data-url="/rest/fr/resource/8786/delete">
                                                                                    Supprimer
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <span
                                                                className="btn btn-lg btn-block btn-default editTemplateButton disabled"
                                                                data-toggle="modal"
                                                                data-target="#loadingContentModal"
                                                                data-url="/challenge/53/state/785/application/638/form/427/field/1340/template/edit"
                                                                data-signed-url="/rest/fr/program/53/state/785/application/638/form/427/field/1340/resource/signed-url"
                                                                data-done-url="/rest/fr/program/53/state/785/application/638/form/427/field/1340/resource/upload"
                                                                data-maxfiles={1}
                                                                data-maxfilesremaining={0}
                                                            >
                                                                {" "}
                                                                Editer un nouveau document{" "}
                                                            </span>
                                                            <div data-error-related="form_543_1340" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="uploadSignedUrlFileContainer formUploadContainer mb-3" data-installed={1}>
                                                            <legend className="active checkbox-custom font-weight-bold col-form-label">Persona</legend>
                                                            <div id="resourceList" className="resourcesWallWrapper">
                                                                <small className="text-muted text-uppercase">template</small>
                                                                <div className="resourcesWrapper ">
                                                                    <section className="templateResourcesList">
                                                                        <div className="item is-bordered resource mb-3">
                                                                            <div className="item-row">
                                                                                <div className="item-row cursorLink triggerResource" data-toggle="modal" data-url="/resource/7b2b00c4-d682-4c07-b40e-b1ea2a26af05/load?browse=0" data-target="#resourceLoadingModal">
                                                                                    <div className="item-icon icon icon-file-pdf-box text-danger" />
                                                                                    <div className="item-content ml-3">
                                                                                        <a className="item-title h4 mb-none stretched-link text-truncate" href="#">
                                                                                            Persona.pdf
                                                                                        </a>
                                                                                        <ul className="item-caption metas small is-list">
                                                                                            <li>
                                                                                                <span className="icon icon-time">&nbsp;02/03/2023 18:54</span>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="item-options">
                                                                                    <a className="btn btn-lg btn-transparent btn-icon" href="/resource/7b2b00c4-d682-4c07-b40e-b1ea2a26af05/download">
                                                                                        <span className="icon icon-cloud-download" />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                    <div className="resourceEmptyState d-none">
                                                                        <div className="d-flex flex-column align-items-center py-5">
                                                                            <span className="text-muted icon icon-file-outline is-lg" />
                                                                            <p className="text-muted text-center mt-4">
                                                                                <span>No document</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <section className="resourcesList">
                                                                <small className="ext-muted text-uppercase">uploaded files</small>
                                                                <div className="item is-bordered resource mb-3">
                                                                    <div className="item-row">
                                                                        <div className="item-row cursorLink triggerResource" data-toggle="modal" data-url="/resource/40a95280-a5b5-4597-9acd-a0a7625cbef3/load?browse=0" data-target="#resourceLoadingModal">
                                                                            <div className="item-icon icon icon-file-pdf-box text-danger" />
                                                                            <div className="item-content ml-3">
                                                                                <a className="item-title h4 mb-none stretched-link text-truncate" href="#">
                                                                                    1694443397800.pdf
                                                                                </a>
                                                                                <ul className="item-caption metas small is-list">
                                                                                    <li>
                                                                                        <span className="icon icon-time">&nbsp;11/09/2023 16:43</span>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="item-options">
                                                                            <a className="btn btn-lg btn-transparent btn-icon" href="/resource/40a95280-a5b5-4597-9acd-a0a7625cbef3/download">
                                                                                <span className="icon icon-cloud-download" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="item-options dropdown">
                                                                            <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <span className="icon icon-options" />
                                                                            </a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item editResourceButton" href="#" data-target="#loadingContentModal" data-toggle="modal" data-url="/resource/8789/edit-modal">
                                                                                    {" "}
                                                                                    Modifier{" "}
                                                                                </a>
                                                                                <span className="dropdown-item text-danger resourceDeleteLink cursorLink" data-url="/rest/fr/resource/8789/delete">
                                                                                    Supprimer
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <span
                                                                className="btn btn-lg btn-block btn-default editTemplateButton disabled"
                                                                data-toggle="modal"
                                                                data-target="#loadingContentModal"
                                                                data-url="/challenge/53/state/785/application/638/form/427/field/1341/template/edit"
                                                                data-signed-url="/rest/fr/program/53/state/785/application/638/form/427/field/1341/resource/signed-url"
                                                                data-done-url="/rest/fr/program/53/state/785/application/638/form/427/field/1341/resource/upload"
                                                                data-maxfiles={1}
                                                                data-maxfilesremaining={0}
                                                            >
                                                                {" "}
                                                                Editer un nouveau document{" "}
                                                            </span>
                                                            <div data-error-related="form_543_1341" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="uploadSignedUrlFileContainer formUploadContainer mb-3" data-installed={1}>
                                                        <legend className="checkbox-custom font-weight-bold col-form-label">Contacts prioritaires</legend>
                                                        <small className="ext-muted text-uppercase">uploaded files</small>
                                                        <section className="resourcesList"></section>
                                                        <div className="addResourceContainer " id="addResourceContainer" data-maxfiles={1} data-maxfilesremaining={1} data-no-file-limit={0}>
                                                            <button className="btn btn-lg btn-block btn-default dropdown-toggle addResourceButton" data-toggle="dropdown">
                                                                <span className="icon icon-plus-circle" />
                                                                <span>Ajouter une ressource</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <span className="dropdown-item cursorLink uploadSignedUrlFile" data-maxfiles={1} data-maxfilesremaining={1} data-maxfileweight={524288000} data-url="/rest/fr/program/53/state/785/application/638/form/427/field/1342/resource/upload" data-signed-url="/rest/fr/program/53/state/785/application/638/form/427/field/1342/resource/signed-url">
                                                                    {" "}
                                                                    Ajouter un document{" "}
                                                                </span>
                                                                <span className="dropdown-item cursorLink resourceUrlBlock" data-toggle="modal" data-target="#loadingContentModal" data-url="/program/53/application/638/state/785/form/427/resource/url/create-modal/1342">
                                                                    {" "}
                                                                    Ajouter un lien{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div data-error-related="form_543_1342" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    {" "}
                                                    <label className="active checkbox-custom font-weight-bold" htmlFor="form_543_1343">
                                                        Problématique affinée
                                                    </label>
                                                    <textarea
                                                        id="form_543_1343"
                                                        name="form_543[1343]"
                                                        maxLength={800}
                                                        data-save-url="/rest/fr/challenge/53/state/785/application/638/form/427/field/1343"
                                                        className="autoSaveField form-control"
                                                        rows={4}
                                                        style={{
                                                            overflow: "hidden",
                                                            overflowWrap: "break-word",
                                                            resize: "none",
                                                            height: 102,
                                                        }}
                                                        defaultValue={"testf"}
                                                    />
                                                </div>
                                                <fieldset className="form-group">
                                                    <legend className="active checkbox-custom font-weight-bold col-form-label required">Validez la proposition</legend>
                                                    <div id="form_543_1388" data-save-url="/rest/fr/challenge/53/state/785/application/638/form/427/field/1388" className="autoSaveField">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="form_543_1388_0" name="form_543[1388]" required className="custom-control-input" defaultValue={552} />
                                                            <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="form_543_1388_0">
                                                                Oui
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="form_543_1388_1" name="form_543[1388]" required className="custom-control-input" defaultValue={553} defaultChecked />
                                                            <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="form_543_1388_1">
                                                                Non
                                                            </label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <fieldset className="form-group">
                                                    <legend className="active checkbox-custom font-weight-bold col-form-label required">Selectionnez un cas d'usage</legend>
                                                    <div id="form_543_1389" data-save-url="/rest/fr/challenge/53/state/785/application/638/form/427/field/1389" className="autoSaveField">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" id="form_543_1389_0" name="form_543[1389][]" className="custom-control-input" defaultValue={554} defaultChecked />
                                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="form_543_1389_0">
                                                                Cas simple
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" id="form_543_1389_1" name="form_543[1389][]" className="custom-control-input" defaultValue={555} defaultChecked />
                                                            <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="form_543_1389_1">
                                                                Cas complexe
                                                            </label>
                                                        </div>
                                                    </div>
                                                </fieldset>{" "}
                                                <input type="hidden" id="form_543__token" name="form_543[_token]" defaultValue="d1822fd93d79879ea2416041cdf.2k8pG54ovU9EYutIwfA-yuVSGgz55G-8uihPu9-Ww8s.nmJwXd0f9Ap2J4N6lclTmIYwVU6m1jv940ca5Oz1-6W9GGpC20PxPgcU3w" />
                                            </form>
                                        </div>
                                    </div>
                                 
                                    <div className="d-flex flex-column flex-lg-row justify-content-between flex-wrap">
                                        <div className="aside-buttons-bottom d-flex flex-column flex-lg-row">
                                            <button id="btn-quiz" className="btn btn-default btn-lg dropdown mr-lg-3 mb-3 mr-0">
                                                <span className="icon icon-format-list-bulleted mr-2" />
                                                Capsules
                                            </button>
                                            <button id="btn-quiz" className="btn btn-default btn-lg dropdown mr-lg-3 mb-3 mr-0">
                                                <span className="icon icon-clipboard-text mr-2" />
                                                Take a quiz
                                            </button>
                                            <button id="btn-quiz" className="btn btn-default btn-lg mr-lg-3 mb-3 mr-0">
                                                <span className="icon icon-thumbs-up-down  mr-2" />
                                                Give a feedback
                                            </button>
                                            <button id="btn-quiz" className="btn btn-default btn-lg mr-lg-3 mb-3 mr-0">
                                                <span className="icon icon-cloud-download  mr-2" />
                                                Ressources
                                            </button>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row">
                                            <button className="btn btn-default btn-lg mr-lg-3 mb-3 mr-0">Previous</button>
                                            <button className="btn btn-primary btn-lg mb-3 mr-0">Complete and next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aside-buttons">
                        <button className="btn btn-lg btn-default mb-3" data-toggle="tooltip" data-original-title="Capsules">
                            <span className="icon icon-format-list-bulleted" />
                        </button>
                        <button className="btn  btn-lg btn-default mb-3" data-toggle="tooltip" data-original-title="Take a quiz">
                            <span className="icon icon-clipboard-text" />
                        </button>
                        <button className="btn btn-lg btn-default mb-3" data-toggle="tooltip" data-original-title="Give feedback">
                            <span className="icon icon-thumbs-up-down" />
                        </button>
                        <button className="btn  btn-lg btn-default" data-toggle="tooltip" data-original-title="Resources">
                            <span className="icon icon-cloud-download" />
                        </button>
                    </div>
                </div>
            </AppContent>
            <AsideCapsules />
        </Layout>
    );
};
