import React from "react";
import { useEffect } from "react";

import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const LearningLesson = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent>
                <div className="row">
                    <div className="col-12 ">
                        <div className="row">
                            <div className="col-12">
                                <div className="application-section is-highlighted">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-lg-8 d-flex flex-column flex-lg-row justify-content-center align-items-center py-lg-8 py-5">
                                            <div className="mr-lg-8 mr-0 order-2 order-lg-1">
                                                <h2>Welcome in your learning course!</h2>
                                                <p>This is where you'll find all your lessons. You can track your progress here. Each lesson has its own modules and capsules. Let's get started!</p>
                                            </div>
                                            <div className="order-1 order-lg-2 mb-5 mb-lg-0">
                                                <svg className="progress-circle-container is-2xl mb-3" viewBox="0 0 32 32" data-percent={15} style={{ ["--percent" as any]: 15 }}>
                                                    <circle className="progress-circle progress-circle-bg" />
                                                    <circle className="progress-circle progress-circle-percent" />
                                                    <text className="progress-circle-text" x={16} y={15}>
                                                        1/5
                                                    </text>
                                                    <text className="progress-circle-subtext" x={16} y={20}>
                                                        Lessons
                                                    </text>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="application-section">
                                    <h3 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#lesson-1" aria-expanded="false">
                                        <div>
                                            <span className="icon icon-lock text-muted d-none" />
                                            <span className="application-section--title-content">
                                                {"{"}
                                                {"{"}Lesson 1{"}"}
                                                {"}"}
                                            </span>
                                            <span className="ml-3 badge is-pill text-primary bg-white border small">
                                                <span className="icon icon-check text-primary small mr-2" />
                                                Finished
                                            </span>
                                        </div>
                                        <span className="icon icon-chevron-right ml-auto" />
                                    </h3>
                                    <div className="collapse" id="lesson-1">
                                        <p className="mt-3">
                                            {"{"}
                                            {"{"}Lesson 1 description{"}"}
                                            {"}"}
                                        </p>
                                        <div className="my-5 rounded bg-light p-5">
                                            <h4 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#module-1" aria-expanded="true">
                                                <div>
                                                    <span className="icon icon-lock text-muted d-none" />
                                                    <span>
                                                        {"{"}
                                                        {"{"}Module 1.1{"}"}
                                                        {"}"}
                                                    </span>
                                                    <span className="ml-3 badge is-pill text-primary bg-white border small">
                                                        <span className="icon icon-check text-primary mr-2" />
                                                        Quiz
                                                    </span>
                                                    <ul className="metas small is-list">
                                                        <li>
                                                            <span className="icon icon-calendar-outline">&nbsp;day/month/year</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </h4>
                                            <div className="collapse show" id="module-1">
                                                <p className="mt-3">
                                                    {"{"}
                                                    {"{"}Module 1 description{"}"}
                                                    {"}"}
                                                </p>
                                                <div className="card is-bordered  mb-5 p-5">
                                                    <div className="d-flex align-items-center flex-fill">
                                                        <ul className="list-timeline-items is-alone">
                                                            <li className="list-timeline-item has-sm-icon is-done is-not-first">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
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
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique </div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-done">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
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
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-done">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
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
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-md-center flex-column flex-md-row">
                                                    <div className="flex-fill d-flex flex-column justify-content-between mb-3 mb-md-0">
                                                        <div className="mr-3">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="small text-muted">Capsules</span>
                                                                <span className="icon icon-check text-primary small">Finished</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <span className="small text-primary">5/5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <a className="btn btn-lg flex-fill btn-default mr-3" href="#">
                                                            <span className="icon icon-questionnaire mr-2" /> View quiz{" "}
                                                        </a>
                                                        <a className="btn btn-lg flex-fill btn-primary"> View capsules </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="application-section">
                                    <h3 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#lesson-2" aria-expanded="true">
                                        <div>
                                            <span className="icon icon-lock text-muted d-none" />
                                            <span className="application-section--title-content">
                                                {"{"}
                                                {"{"}Lesson 2{"}"}
                                                {"}"}
                                            </span>
                                            <span className="ml-3 badge is-pill text-primary bg-white border small  d-none">
                                                <span className="icon icon-check text-primary small mr-2 d-none" />
                                                Finished
                                            </span>
                                        </div>
                                        <span className="icon icon-chevron-right ml-auto" />
                                    </h3>
                                    <div className="collapse show" id="lesson-2">
                                        <p className="mt-3">
                                            {"{"}
                                            {"{"}Lesson 2 description{"}"}
                                            {"}"}
                                        </p>
                                        <div className="my-5 rounded bg-light p-5">
                                            <h4 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#module-2-1" aria-expanded="true">
                                                <div>
                                                    <span className="icon icon-lock text-muted d-none" />
                                                    <span>
                                                        {"{"}
                                                        {"{"}Module 2.1{"}"}
                                                        {"}"}
                                                    </span>
                                                    <span className="ml-3 badge is-pill text-primary bg-white border small d-none">
                                                        <span className="icon icon-check text-primary mr-2 ">
                                                            <span>Quiz</span>
                                                            <ul className="metas small is-list">
                                                                <li>
                                                                    <span className="icon icon-calendar-outline">&nbsp;day/month/year</span>
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </span>
                                                </div>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </h4>
                                            <div className="collapse show" id="module-2-1">
                                                <p className="mt-3">
                                                    {"{"}
                                                    {"{"}Module 2.1 description{"}"}
                                                    {"}"}
                                                </p>
                                                <div className="card is-bordered  mb-5 p-5">
                                                    <div className="d-flex align-items-center flex-fill">
                                                        <ul className="list-timeline-items is-alone">
                                                            <li className="list-timeline-item has-sm-icon is-done is-not-first">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
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
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique </div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={50} style={{ ["--percent" as any]: 50 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title text-primary"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress is-not-last">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <div className="list-timeline-item--title small text-muted ml-10">2 more </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-md-center flex-column flex-md-row">
                                                    <div className="flex-fill d-flex flex-column justify-content-between mb-3 mb-md-0">
                                                        <div className="mr-3">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="small text-muted">Capsules</span>
                                                                <span className="text-muted small">In progress</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <span className="small text-muted">3/5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <a className="btn btn-lg flex-fill btn-default mr-3" href="#">
                                                            <span className="icon icon-questionnaire mr-2" /> Take a quiz{" "}
                                                        </a>
                                                        <a className="btn btn-lg flex-fill btn-primary" href="#">
                                                            {" "}
                                                            Continue capsules{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-5 rounded bg-light p-5">
                                            <h4 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#module-2-2" aria-expanded="false">
                                                <div>
                                                    <span className="icon icon-lock text-muted" />
                                                    <span>
                                                        {"{"}
                                                        {"{"}Module 2.2{"}"}
                                                        {"}"}
                                                    </span>
                                                    <span className="ml-3 badge is-pill text-primary bg-white border small d-none">
                                                        <span className="icon icon-check text-primary mr-2" />
                                                        Quiz
                                                    </span>
                                                    <ul className="metas small is-list">
                                                        <li>
                                                            <span className="icon icon-calendar-outline">&nbsp;day/month/year</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </h4>
                                            <div className="collapse" id="module-2-2">
                                                <p className="mt-3">
                                                    {"{"}
                                                    {"{"}Module 2.2 description{"}"}
                                                    {"}"}
                                                </p>
                                                <div className="card is-bordered  mb-5 p-5">
                                                    <div className="mb-7 d-flex align-items-center flex-fill">
                                                        <ul className="list-timeline-items is-alone">
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique </div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-not-last is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <div className="list-timeline-item--title small text-muted ml-10">2 more </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-md-center flex-column flex-md-row">
                                                    <div className="flex-fill d-flex flex-column justify-content-between mb-3 mb-md-0">
                                                        <div className="mr-3">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="small text-muted">Capsules</span>
                                                                <span className="text-muted small">Not completed</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <span className="small text-muted">0/5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <a className="btn btn-lg flex-fill btn-default mr-3 disabled" href="#">
                                                            <span className="icon icon-questionnaire mr-2" /> take a quiz{" "}
                                                        </a>
                                                        <a className="btn btn-lg flex-fill btn-primary disabled" href="#">
                                                            {" "}
                                                            Start capsules{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="application-section">
                                    <h3 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#lesson-3" aria-expanded="false">
                                        <div>
                                            <span className="icon icon-lock text-muted" />
                                            <span className="application-section--title-content">
                                                {"{"}
                                                {"{"}Lesson 3{"}"}
                                                {"}"}
                                            </span>
                                            <span className="ml-3 badge is-pill text-primary bg-white border small  d-none">
                                                <span className="icon icon-check text-primary small mr-2 d-none" />
                                                Finished
                                            </span>
                                        </div>
                                        <span className="icon icon-chevron-right ml-auto" />
                                    </h3>
                                    <div className="collapse" id="lesson-3">
                                        <p className="mt-3">
                                            {"{"}
                                            {"{"}Lesson 3 description{"}"}
                                            {"}"}
                                        </p>
                                        <div className="my-5 rounded bg-light p-5">
                                            <h4 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#module-3-1" aria-expanded="false">
                                                <div>
                                                    <span className="icon icon-lock text-muted" />
                                                    <span>
                                                        {"{"}
                                                        {"{"}Module 3.1{"}"}
                                                        {"}"}
                                                    </span>
                                                    <span className="ml-3 badge is-pill text-primary bg-white border small d-none">
                                                        <span className="icon icon-check text-primary mr-2" />
                                                        Quiz
                                                    </span>
                                                    <ul className="metas small is-list">
                                                        <li>
                                                            <span className="icon icon-calendar-outline">&nbsp;day/month/year</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </h4>
                                            <div className="collapse" id="module-3-1">
                                                <p className="mt-3">
                                                    {"{"}
                                                    {"{"}Module 3.1 description{"}"}
                                                    {"}"}
                                                </p>
                                                <div className="card is-bordered  mb-5 p-5">
                                                    <div className="mb-7 d-flex align-items-center flex-fill">
                                                        <ul className="list-timeline-items is-alone">
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique </div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-not-last is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <div className="list-timeline-item--title small text-muted ml-10">2 more </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-md-center flex-column flex-md-row">
                                                    <div className="flex-fill d-flex flex-column justify-content-between mb-3 mb-md-0">
                                                        <div className="mr-3">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="small text-muted">Capsules</span>
                                                                <span className="text-muted small">Not completed</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <span className="small text-muted">0/5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <a className="btn btn-lg flex-fill btn-default mr-3 disabled" href="#">
                                                            <span className="icon icon-questionnaire mr-2" /> take a quiz{" "}
                                                        </a>
                                                        <a className="btn btn-lg flex-fill btn-primary disabled" href="#">
                                                            {" "}
                                                            Start capsules{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-5 rounded bg-light p-5">
                                            <h4 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#module-3-2" aria-expanded="false">
                                                <div>
                                                    <span className="icon icon-lock text-muted" />
                                                    <span>
                                                        {"{"}
                                                        {"{"}Module 3.2{"}"}
                                                        {"}"}
                                                    </span>
                                                    <span className="ml-3 badge is-pill text-primary bg-white border small d-none">
                                                        <span className="icon icon-check text-primary mr-2" />
                                                        Quiz
                                                    </span>
                                                    <ul className="metas small is-list">
                                                        <li>
                                                            <span className="icon icon-calendar-outline">&nbsp;day/month/year</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </h4>
                                            <div className="collapse" id="module-3-2">
                                                <p className="mt-3">
                                                    {"{"}
                                                    {"{"}Module 3.2 description{"}"}
                                                    {"}"}
                                                </p>
                                                <div className="card is-bordered  mb-5 p-5">
                                                    <div className="mb-7 d-flex align-items-center flex-fill">
                                                        <ul className="list-timeline-items is-alone">
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique </div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-not-last is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <div className="list-timeline-item--title small text-muted ml-10">2 more </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-md-center flex-column flex-md-row">
                                                    <div className="flex-fill d-flex flex-column justify-content-between mb-3 mb-md-0">
                                                        <div className="mr-3">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="small text-muted">Capsules</span>
                                                                <span className="text-muted small">Not completed</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <span className="small text-muted">0/5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <a className="btn btn-lg flex-fill btn-default mr-3 disabled" href="#">
                                                            <span className="icon icon-questionnaire mr-2" /> take a quiz{" "}
                                                        </a>
                                                        <a className="btn btn-lg flex-fill btn-primary disabled" href="#">
                                                            {" "}
                                                            Start capsules{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="application-section">
                                    <h3 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#lesson-4" aria-expanded="false">
                                        <div>
                                            <span className="icon icon-lock text-muted" />
                                            <span className="application-section--title-content">
                                                {"{"}
                                                {"{"}Lesson 4{"}"}
                                                {"}"}
                                            </span>
                                            <span className="ml-3 badge is-pill text-primary bg-white border small  d-none">
                                                <span className="icon icon-check text-primary small mr-2 d-none" />
                                                Finished
                                            </span>
                                        </div>
                                        <span className="icon icon-chevron-right ml-auto" />
                                    </h3>
                                    <div className="collapse" id="lesson-4">
                                        <p className="mt-3">
                                            {"{"}
                                            {"{"}Lesson 3 description{"}"}
                                            {"}"}
                                        </p>
                                        <div className="my-5 rounded bg-light p-5">
                                            <h4 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#module-4-1" aria-expanded="false">
                                                <div>
                                                    <span className="icon icon-lock text-muted" />
                                                    <span>
                                                        {"{"}
                                                        {"{"}Module 4.1{"}"}
                                                        {"}"}
                                                    </span>
                                                    <span className="ml-3 badge is-pill text-primary bg-white border small d-none">
                                                        <span className="icon icon-check text-primary mr-2" />
                                                        Quiz
                                                    </span>
                                                    <ul className="metas small is-list">
                                                        <li>
                                                            <span className="icon icon-calendar-outline">&nbsp;day/month/year</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </h4>
                                            <div className="collapse" id="module-4-1">
                                                <p className="mt-3">
                                                    {"{"}
                                                    {"{"}Module 4.1 description{"}"}
                                                    {"}"}
                                                </p>
                                                <div className="card is-bordered  mb-5 p-5">
                                                    <div className="mb-7 d-flex align-items-center flex-fill">
                                                        <ul className="list-timeline-items is-alone">
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique </div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-not-last is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <div className="list-timeline-item--title small text-muted ml-10">2 more </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-md-center flex-column flex-md-row">
                                                    <div className="flex-fill d-flex flex-column justify-content-between mb-3 mb-md-0">
                                                        <div className="mr-3">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="small text-muted">Capsules</span>
                                                                <span className="text-muted small">Not completed</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <span className="small text-muted">0/5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <a className="btn btn-lg flex-fill btn-default mr-3 disabled" href="#">
                                                            <span className="icon icon-questionnaire mr-2" /> take a quiz{" "}
                                                        </a>
                                                        <a className="btn btn-lg flex-fill btn-primary disabled" href="#">
                                                            {" "}
                                                            Start capsules{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-5 rounded bg-light p-5">
                                            <h4 className="to-collapse collapsed mb-none" data-toggle="collapse" data-target="#module-4-2" aria-expanded="false">
                                                <div>
                                                    <span className="icon icon-lock text-muted" />
                                                    <span>
                                                        {"{"}
                                                        {"{"}Module 4.2{"}"}
                                                        {"}"}
                                                    </span>
                                                    <span className="ml-3 badge is-pill text-primary bg-white border small d-none">
                                                        <span className="icon icon-check text-primary mr-2" />
                                                        Quiz
                                                    </span>
                                                    <ul className="metas small is-list">
                                                        <li>
                                                            <span className="icon icon-calendar-outline">&nbsp;day/month/year</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </h4>
                                            <div className="collapse" id="module-4-2">
                                                <p className="mt-3">
                                                    {"{"}
                                                    {"{"}Module 4.2 description{"}"}
                                                    {"}"}
                                                </p>
                                                <div className="card is-bordered  mb-5 p-5">
                                                    <div className="mb-7 d-flex align-items-center flex-fill">
                                                        <ul className="list-timeline-items is-alone">
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique </div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-not-last is-progress">
                                                                <a className="list-timeline-item--content" href="/program/125/project/2065/module/3716">
                                                                    <div className="form-row">
                                                                        <div className="col-auto">
                                                                            <div className="d-flex px-1 mx-3">
                                                                                <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0 }}>
                                                                                    <circle className="progress-circle progress-circle-bg" />
                                                                                    <circle className="progress-circle progress-circle-percent" />
                                                                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col">
                                                                            <div className="list-timeline-item--title"> Consectetur adipiscing elit duis tristique</div>
                                                                            <span className="icon icon-time small text-muted">&nbsp;5min</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="list-timeline-item has-sm-icon is-progress">
                                                                <div className="list-timeline-item--title small text-muted ml-10">2 more </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-md-center flex-column flex-md-row">
                                                    <div className="flex-fill d-flex flex-column justify-content-between mb-3 mb-md-0">
                                                        <div className="mr-3">
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="small text-muted">Capsules</span>
                                                                <span className="text-muted small">Not completed</span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="progress flex-fill mr-3" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <span className="small text-muted">0/5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <a className="btn btn-lg flex-fill btn-default mr-3 disabled" href="#">
                                                            <span className="icon icon-questionnaire mr-2" /> take a quiz{" "}
                                                        </a>
                                                        <a className="btn btn-lg flex-fill btn-primary disabled" href="#">
                                                            {" "}
                                                            Start capsules{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
