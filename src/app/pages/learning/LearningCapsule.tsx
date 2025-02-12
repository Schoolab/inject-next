import React from "react";
import { useEffect } from "react";

import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideCapsules } from "@/app/components/asides/AsideCapsules";
import { aside } from "../../../../public/utils/aside";
import { CardCollapse } from "@/app/components/cards/CardCollapse";
import { CardTask } from "@/app/components/cards/CardTask";

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
                                    <CardTask />
                                 
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
