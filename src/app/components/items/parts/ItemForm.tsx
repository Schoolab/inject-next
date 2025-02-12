import React from "react";
import { LangSwitch } from "@/app/components/LangSwitch";
import { FormGroup } from "@/app/forms/FormGroup";
import { FormInput } from "@/app/forms/FormInput";
import { FormOption } from "@/app/forms/FormOption";
import { FormSelect } from "@/app/forms/FormSelect";
import { Button } from "@/app/components/Button";
import { FormOptions } from "@/app/forms/FormOptions";

export interface ItemFormProps {
  addClass?: string;
  style?: React.CSSProperties;
}

export const ItemForm = ({ addClass, style, ...props }: ItemFormProps) => {
  let classTab = ["d-flex flex-column gap-md"];
  addClass &&classTab.push(addClass);

    return (
      <div className={classTab.join(" ")} style={style} {...props}>
          <LangSwitch />
          <FormGroup id="question_label" label="Question" required>
            <FormInput
                id="question_label"
                required
                defaultValue=""
                placeholder="Your question here…"
            />
            <div className="d-flex gap-xs mt-4px">
                <FormOption id="required" type="checkbox" label="Required question" defaultChecked />
                <FormOption id="private" type="checkbox" label="Private response" />
            </div>
          </FormGroup>
          <FormGroup id="hint" label="Hint text" hint="This is a text to help participants to understand how to fill the field.">
            <FormInput
                id="hint"
                defaultValue=""
                placeholder="e.g. What is you school name?"
            />
          </FormGroup>
          <hr />
          <FormGroup id="type" label="Type" required>
            <FormSelect
                id="type"
                defaultValue=""
                options={[
                    { label: "Short text", value: "short", selected: true },
                    { label: "Long text", value: "long" },
                    { label: "Unique choice (select)", value: "unique-select" },
                    { label: "Unique choice (radio)", value: "unique-radio" },
                    { label: "Multiple choices", value: "multiple" },
                    { label: "Checklist", value: "checklist" },
                    { label: "Resources", value: "resources" },
                    { label: "Links", value: "links" },
                    { label: "Rating", value: "rating" },
                    { label: "NPS", value: "nps" },
                ]}
            />
          </FormGroup>
          <FormGroup id="preview" label="Preview">
            <div className="bg-white border rounded d-flex flex-column justify-content-center align-items-center p-48px">
                {/* Preview: update with form infos */}
                <FormGroup id="exemple" label="Question Label" hint="Hint text" required addClass="w-100">
                    <FormInput
                        id="exemple"
                        required
                        defaultValue=""
                        placeholder="Your response here…"
                    />
                </FormGroup>
                {/* Preview */}
            </div>
          </FormGroup>
          <FormGroup id="choices" label="Choices">
            <FormOptions
                id="choices"
                placeholders="Option value here..."
                deletable={true}
                options={[
                    { id: "option1", label: "Option #1", value: "Option #1" },
                    { id: "option2", label: "Option #2", value: "Option #2" },
                    { id: "option3", label: "Option #3" },
                ]}
            />
          </FormGroup>
          <FormGroup id="text_max_length" label="Text max length" hint="Leave empty for no limit">
            <FormInput
                id="text_max_length"
                defaultValue=""
                placeholder="e.g. 100"
                type="number"
            />
          </FormGroup>
          <FormGroup id="text_type_verification" label="Text type verification" hint="Choose what type of content you want in responses">
            <FormSelect
                id="text_type_verification"
                defaultValue=""
                options={[
                    { label: "No verification", value: "none" },
                    { label: "Texts", value: "texts", options: [
                        { label: "Text", value: "text" },
                        { label: "Email", value: "email" },
                        { label: "URL", value: "url" },
                    ] },
                    { label: "Numbers", value: "numbers", options: [
                        { label: "Phone", value: "tel" },
                        { label: "Number", value: "number" },
                    ] },
                    { label: "Dates", value: "dates", options: [
                        { label: "Date", value: "date" },
                        { label: "Time", value: "time" },
                        { label: "DateTime", value: "datetime" },
                        { label: "Month", value: "month" },
                        { label: "Week", value: "week" },
                    ] },
                ]}
            />
          </FormGroup>
          <hr />
          <FormGroup id="integrations" label="Integrations">
            <div className="d-flex flex-column flex-lg-row gap-xs">
                <FormOption id="show_csv" type="checkbox" label="Show in CSV exports" defaultChecked />
                <FormOption id="show_insights" type="checkbox" label="Show in Insights" defaultChecked />
            </div>
          </FormGroup>
          {/* Hide unless show_insights checked */}
          <FormGroup id="insights_chart_type" label="Insights chart type" required>
            <FormSelect
                id="insights_chart_type"
                defaultValue=""
                options={[
                    { label: "Pie chart", value: "pie", selected: true },
                    { label: "Bar chart", value: "bar" },
                    { label: "Radar chart", value: "radar" },
                    { label: "Average value", value: "average" },
                    { label: "Total value", value: "total" },
                ]}
            />
          </FormGroup>
          <hr />
          <FormGroup id="condition" label="Condition" hint="You can add only one condition on a question.">
              <Button type="default" iconStartName="plus-circle" label="Add condition" extended={true} />
          </FormGroup>
      </div>
    );
};
