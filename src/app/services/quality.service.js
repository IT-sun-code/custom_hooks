// скопировала из другого проекта и сделала по аналогии с profession.service.js

import httpService from "./http.service";

const qualityEndpoint = "quality/";

const qualityService = {
    fetchAll: async () => {
        const { data } = await httpService.get(qualityEndpoint);
        return data;
    }
};
export default qualityService;
