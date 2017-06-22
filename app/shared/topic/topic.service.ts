import { Injectable } from "@angular/core";
import { Topic } from "./topic";

@Injectable()
export class TopicService {
    private topics = new Array<Topic>(
        {title: "Rap", category: "Music"},
        {title: "Apple", category: "Technology"}
    );

    getTopics(): Topic[]{
        return this.topics;
    }
}